import { toast } from "react-toastify";

export async function loadPendingSellers(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadPendingSellers", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let pendingSellersMain = document.getElementById("pending-sellers-main");
            let pendingSeller = document.getElementById("pending-seller");
            let emptyPendingSellers = document.getElementById("empty-pending-sellers");
            pendingSellersMain.innerHTML = "";
            if (json.status) {
                json.sellerList.forEach(seller => {
                    let pendingSellerClone = pendingSeller.cloneNode(true);
                    pendingSellerClone.classList.remove("hidden");
                    pendingSellerClone.classList.add("flex");
                    emptyPendingSellers.classList.remove("flex");
                    emptyPendingSellers.classList.add("hidden");
                    pendingSellerClone.querySelector("#pending-seller-name").innerHTML = seller.user.fname + " " + seller.user.lname;
                    pendingSellerClone.querySelector("#pending-seller-email").innerHTML = seller.user.email;
                    pendingSellerClone.querySelector("#verify-seller-btn").addEventListener("click", (e) => {
                        verifySeller(setLoading, seller.user.email);
                    });
                    pendingSellersMain.append(pendingSellerClone);
                });
            } else if (json.message === "EMPTY") {
                pendingSeller.classList.remove("flex");
                pendingSeller.classList.add("hidden");
                emptyPendingSellers.classList.remove("hidden");
                emptyPendingSellers.classList.add("flex");
                pendingSellersMain.append(emptyPendingSellers);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function verifySeller(setLoading, email) {
    const sellerObject = {
        email: email
    };

    const sellerJson = JSON.stringify(sellerObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/VerifySeller", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: sellerJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                loadPendingSellers();
                window.location.reload();
            } else {
                toast.error("Something went wrong! Please try again later.");
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