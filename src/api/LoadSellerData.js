export async function loadSellerData() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                document.getElementById("sellerName").innerHTML = json.name;
                document.getElementById("sellerCountry").innerHTML = json.country;
            }
        }
    } catch (error) {
        console.log(error);
    }
}