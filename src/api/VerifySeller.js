import { toast } from "react-toastify";

export async function verifySeller(setLoading) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const adminObject = {
        email: email,
        password: password,
    };

    const adminJson = JSON.stringify(adminObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/AdminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: adminJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
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