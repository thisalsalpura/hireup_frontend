import { toast } from "react-toastify";

export async function verifyUser(setLoading) {
    const verificationCode = document.getElementById("verification").value;

    const verificationObject = {
        verificationCode: verificationCode
    };

    const verificationJson = JSON.stringify(verificationObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/UserVerification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: verificationJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                document.getElementById("verification").value = "";
                setTimeout(() => {
                    window.location.href = "/home";
                }, 2000);
            } else {
                if (json.message === "ENULL") {
                    document.getElementById("verification").value = "";
                    window.location.href = "/userLogin";
                } else {
                    toast.error(json.message);
                }
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