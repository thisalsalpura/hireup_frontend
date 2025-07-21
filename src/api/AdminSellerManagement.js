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
            if (json.status) {
                let pendingSellersMain = document.getElementById("pending-sellers-main");
                let pendingSeller = document.getElementById("pending-seller");
                pendingSellersMain.innerHTML = "";
                json.sellerList.forEach(seller => {
                    let pendingSellerBoxDesign =
                        `<div id="pending-seller" className="cus-btn-set_2 h-full col-span-12 flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-2xl px-5 py-3.5 gap-4 group">
                            <p id="pending-seller-name" className="font-londrinasolid text-black group-hover:text-white tracking-wider">${json.user.fname + " " + json.user.lname}</p>
                            <p id="pending-seller-email" className="font-londrinasolid text-black group-hover:text-white tracking-wider">${json.user.email}</p>
                            <button id="verify-seller-btn" onClick={() => verifySeller(setLoading)} type="button" className="w-full md:w-fit inline-flex justify-center rounded-md bg-cus-light-yellow-high px-3 py-1 text-lg font-semibold text-black shadow-xs ring-1 ring-cus-light-yellow-high ring-inset cursor-pointer">Verify</button>
                        </div>`;
                    pendingSellersMain.innerHTML += pendingSellerBoxDesign;
                });
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}