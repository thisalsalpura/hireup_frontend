import { toast } from "react-toastify";

export async function registerAsSeller(setLoading, setShowFPModal) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userObject = {
        email: email,
        password: password
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/RegisterAsSeller", {
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
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                setShowFPModal(false);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                if (json.user === "NOTUPDATED") {
                    toast.error(json.message);
                    setTimeout(() => {
                        window.location = "/userProfile";
                    }, 2000);
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