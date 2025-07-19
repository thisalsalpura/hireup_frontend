import { toast } from "react-toastify";

export async function signIn(setLoading) {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    const userObject = {
        email: email,
        password: password,
        rememberMe: rememberMe
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SignIn", {
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
                document.getElementById("email1").value = "";
                document.getElementById("password1").value = "";

                if (json.message === "NVERIFY") {
                    toast.success("User sign in Successfully! Please check your Email Address for the Verification.");
                    setTimeout(() => {
                        window.location.href = "/userVerification";
                    }, 2000);
                } else if (json.message === "WVERIFY") {
                    toast.success("User sign in Successfully!");
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 2000);
                }
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