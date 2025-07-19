import { toast } from "react-toastify";

export async function forgotPassword(setLoading, setShowFPModal) {
    const email = document.getElementById("email1").value;

    const userObject = {
        email: email
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ForgotPassword", {
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
                document.getElementById("email1").value = "";
                setShowFPModal(true);
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

export async function changeForgotPassword(setLoading, setShowFPModal) {
    const fpVerification = document.getElementById("fpVerification").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const passwordObject = {
        fpVerification: fpVerification,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    };

    const passwordJson = JSON.stringify(passwordObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ChangeForgotPassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: passwordJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                document.getElementById("fpVerification").value = "";
                document.getElementById("newPassword").value = "";
                document.getElementById("confirmPassword").value = "";
                setShowFPModal(false);
                setTimeout(() => {
                    window.location.reload();
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