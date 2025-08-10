import { toast } from "react-toastify";

export async function loadAllGigsList(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadAllGigsList", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let gigsMain = document.getElementById("gigs-main");
            let gig = document.getElementById("gig");
            let emptyGigs = document.getElementById("empty-gigs");
            gigsMain.innerHTML = "";
            if (json.status) {
                json.gigsList.forEach((g, i) => {
                    let gigClone = gig.cloneNode(true);
                    gigClone.removeAttribute("id");
                    gigClone.classList.remove("hidden");
                    emptyGigs.classList.add("hidden");
                    const imageURL = json.gigImageList[i];
                    gigClone.querySelector("#gig-image").src = imageURL;
                    gigClone.querySelector("#gig-title").innerHTML = g.title;
                    gigClone.querySelector("#gig-category").innerHTML = g.sub_Category.category.name;
                    gigClone.querySelector("#gig-subcategory").innerHTML = g.sub_Category.name;
                    gigClone.querySelector("#gig-seller").innerHTML = g.user.email;
                    const changeStatusBtn = gigClone.querySelector("#change-status-btn");
                    if (json.statusList[i] === "Verified") {
                        changeStatusBtn.classList.add("bg-green-300");
                        changeStatusBtn.innerHTML = "Verified";
                    } else if (json.statusList[i] === "Pending") {
                        changeStatusBtn.classList.add("bg-red-300");
                        changeStatusBtn.innerHTML = "Pending";
                    }
                    changeStatusBtn.addEventListener("click", (e) => {
                        changeStatus(setLoading, g.id);
                    });
                    gigsMain.appendChild(gigClone);
                });
            } else {
                gig.classList.add("hidden");
                emptyGigs.classList.remove("hidden");
                gigsMain.appendChild(emptyGigs);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function changeStatus(setLoading, id) {
    const gigObject = {
        id: id
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ChangeGigStatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: gigJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                loadAllGigsList(setLoading);
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