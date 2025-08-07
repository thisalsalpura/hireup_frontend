import { toast } from "react-toastify";

export async function checkout(setLoading, setShowPaymentConfModal) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/CheckOut", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                window.payhere.onCompleted = async function onCompleted(orderId) {
                    toast.success("Payment Completed. Order ID: " + orderId);
                    setShowPaymentConfModal(true);

                    let retries = 0;
                    const maxRetries = 10;
                    const delay = 1000;

                    async function checkStatus() {
                        const response2 = await fetch("http://localhost:8080/hireup_backend/CheckPaymentStatus?orderId=" + orderId, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            credentials: "include"
                        });

                        if (response2.ok) {
                            const json2 = await response2.json();
                            if (json2.status) {
                                window.location = "/returnPayment?orderId=" + orderId;
                            } else if (retries < maxRetries) {
                                retries++;
                                setTimeout(checkStatus, delay);
                            } else {
                                window.location = "/cancelPayment";
                            }
                        } else {
                            window.location = "/cancelPayment";
                        }
                    }

                    checkStatus();
                };

                // Payment Window Closed
                window.payhere.onDismissed = function onDismissed() {
                    window.location = "/cancelPayment";
                };

                // Error Occurred
                window.payhere.onError = function onError(error) {
                    console.log(error);
                    window.location = "/cancelPayment";
                };

                window.payhere.startPayment(json.payHereJson);
            } else {
                if (json.messageCode === "NLOGIN") {
                    toast.error(json.message);
                    setTimeout(() => {
                        window.location.href = "/userLogin";
                    }, 2000);
                } else if (json.messageCode === "NVERIFY") {
                    toast.error(json.message);
                } else if (json.messageCode === "NPUPDATE") {
                    toast.error(json.message);
                    setTimeout(() => {
                        window.location.href = "/userProfile";
                    }, 2000);
                } else if (json.messageCode === "ECART") {
                    toast.error(json.message);
                } else {
                    toast.error("Something went wrong! Please try again later.");
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