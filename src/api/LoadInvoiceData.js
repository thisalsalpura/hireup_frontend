export async function loadInvoiceData(setLoading, setInvoiceURL) {
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
                console.log(json);
                if (json.status) {
                    document.getElementById("order-id").innerHTML = json.invoice.order_id;
                    document.getElementById("order-datetime").innerHTML = json.invoice.placed_date;
                    setInvoiceURL(json.invoiceURL);
                } else {
                    window.location = "/home";
                }
            } else {
                window.location = "/home";
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