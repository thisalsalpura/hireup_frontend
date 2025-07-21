import { toast } from "react-toastify";

export async function adminVerification(setLoading, setShowFPModal) {
    const verification = document.getElementById("verification").value;

    const adminObject = {
        verification: verification
    };

    const adminJson = JSON.stringify(adminObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/AdminVerification", {
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
                document.getElementById("verification").value = "";
                setShowFPModal(false);
                setTimeout(() => {
                    window.location.href = "/adminDashboard";
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