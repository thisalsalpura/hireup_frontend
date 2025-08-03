import { toast } from "react-toastify";

export async function checkout(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/Checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                window.payhere.onCompleted = function onCompleted(orderId) {
                    toast.success("Payment Completed. Order ID:" + orderId);
                };

                // Payment Window Closed
                window.payhere.onDismissed = function onDismissed() {
                    console.log("Payment Dismissed!");
                };

                // Error Occurred
                window.payhere.onError = function onError(error) {
                    console.log("Error:" + error);
                };

                window.payhere.startPayment(json.payhereJson);
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