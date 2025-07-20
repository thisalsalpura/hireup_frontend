import { toast } from "react-toastify";

export async function switchToSeller(showModal, showLoading) {
    showLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SwitchToSeller", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                if (json.message === "BUYER") {
                    showModal();
                } else if (json.message === "SELLER") {
                    window.location = "/sellerDashboard";
                } else if (json.message === "NSESSION") {
                    window.location = "/userLogin";
                }
            }
        } else {
            toast.error("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    } finally {
        showLoading(false);
    }
}