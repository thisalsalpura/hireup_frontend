import { toast } from "react-toastify";

export async function addToCart(setLoading, gigId) {
    const gigObject = {
        gigId: gigId
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/AddToCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: gigJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {

            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}