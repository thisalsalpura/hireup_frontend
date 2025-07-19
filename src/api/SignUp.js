import { toast } from "react-toastify";

export async function signUp(setLoading) {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;

    const userObject = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SignUp", {
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
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("email2").value = "";
                document.getElementById("password2").value = "";
                setTimeout(() => {
                    window.location.href = "/userVerification";
                }, 2000);
            } else {
                toast.error(json.message);
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