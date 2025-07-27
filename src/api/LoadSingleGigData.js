import { toast } from "react-toastify";

export async function loadSingleGigData(setLoading) {
    const searchParams = new URLSearchParams(window.location.search);

    setLoading(true);

    if (searchParams.has("id")) {
        const gigId = searchParams.get("id");

        try {
            const response = await fetch("http://localhost:8080/hireup_backend/LoadSingleGigData?id=" + gigId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.status) {
                    document.getElementById("gig-title").innerHTML = json.singleGig.title;
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
}