import { toast } from "react-toastify";

export async function loadInvoiceData(setLoading, setPdfUrl) {
    const searchParams = new URLSearchParams(window.location.search);

    setLoading(true);

    if (searchParams.has("orderId")) {
        const orderId = searchParams.get("orderId");

        try {
            const response = await fetch("http://localhost:8080/hireup_backend/LoadInvoiceData?orderId=" + orderId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (response.ok) {
                const json = await response.json();
                if (json.status) {
                    setPdfUrl(json.invoiceURL);
                    console.log(json.invoiceURL);
                } else {
                    window.location = "/home";
                }
            } else {
                toast.error("Something went wrong! Please try again later.");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    } else {
        window.location = "/home";
    }
}