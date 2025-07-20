import { toast } from "react-toastify";

export async function subscribe() {
    const email = document.getElementById("email").value;

    const emailObject = {
        email: email
    };

    const emailJson = JSON.stringify(emailObject);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/Subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: emailJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                document.getElementById("email").value = "";
                toast.success(json.message);
            } else {
                toast.error(json.message);
            }
        } else {
            toast.error("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    }
}