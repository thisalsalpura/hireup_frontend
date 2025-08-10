import { toast } from "react-toastify";

export async function loadAllUsersList(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadAllUsersList", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let usersMain = document.getElementById("users-main");
            let user = document.getElementById("user");
            let emptyUsers = document.getElementById("empty-users");
            usersMain.innerHTML = "";
            if (json.status) {
                json.userList.forEach((u, i) => {
                    let userClone = user.cloneNode(true);
                    userClone.removeAttribute("id");
                    userClone.classList.remove("hidden");
                    emptyUsers.classList.add("hidden");
                    userClone.querySelector("#user-name").innerHTML = u.fname + " " + u.lname;
                    userClone.querySelector("#user-email").innerHTML = u.email;
                    const changeStatusBtn = userClone.querySelector("#change-status-btn");
                    if (json.statusList[i] === "Active") {
                        changeStatusBtn.classList.add("bg-green-300");
                        changeStatusBtn.innerHTML = "Active";
                    } else if (json.statusList[i] === "Inactive") {
                        changeStatusBtn.classList.add("bg-red-300");
                        changeStatusBtn.innerHTML = "Inactive";
                    }
                    changeStatusBtn.addEventListener("click", (e) => {
                        changeStatus(setLoading, u.id);
                    });
                    usersMain.appendChild(userClone);
                });
            } else {
                user.classList.add("hidden");
                emptyUsers.classList.remove("hidden");
                usersMain.appendChild(emptyUsers);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function changeStatus(setLoading, id) {
    const userObject = {
        id: id
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ChangeUserStatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: userJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                loadAllUsersList(setLoading);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.error("Something went wrong! Please try again later.");
            }
        } else {
            toast.error("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}