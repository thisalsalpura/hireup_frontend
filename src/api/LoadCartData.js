import { toast } from "react-toastify";

export async function loadCartData(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadCartData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let cartGigsMain = document.getElementById("cart-gigs-main");
            let cartGig = document.getElementById("cart-gig");
            let emptyCartGigs = document.getElementById("empty-cart-gigs");
            cartGigsMain.innerHTML = "";
            if (json.status) {
                if (json.message === "NEMPTY") {
                    json.userCartGigsList.forEach((gig, i) => {
                        let cartGigClone = cartGig.cloneNode(true);
                        cartGigClone.removeAttribute("id");
                        cartGigClone.classList.remove("hidden");
                        emptyCartGigs.classList.add("hidden");
                        const imageURL = json.userCartGigsImagesList[i];
                        cartGigClone.querySelector("#cart-gig-image").src = imageURL;
                        cartGigClone.querySelector("#cart-gig-seller").innerHTML = gig.gig_Has_Package.gig.user.fname + gig.gig_Has_Package.gig.user.lname;
                        cartGigClone.querySelector("#cart-gig-title").innerHTML = gig.gig_Has_Package.gig.title;
                        cartGigClone.querySelector("#cart-gig-package-type").innerHTML = gig.gig_Has_Package.package_Type.name;
                        cartGigClone.querySelector("#cart-gig-price").innerHTML = gig.gig_Has_Package.price;
                        cartGigClone.querySelector("#remove-cart-gig").addEventListener("click", (e) => {
                            removeFromCart(setLoading, gig.id);
                        });
                        cartGigsMain.appendChild(cartGigClone);
                    });
                } else {
                    cartGigsMain.classList.add("hidden");
                    emptyCartGigs.classList.remove("hidden");
                    cartGigsMain.appendChild(emptyCartGigs);
                }
            } else if (json.message === "EMPTY") {
                cartGigsMain.classList.add("hidden");
                emptyCartGigs.classList.remove("hidden");
                cartGigsMain.appendChild(emptyCartGigs);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function removeFromCart(setLoading, id) {
    const cartGigObject = {
        id: id
    };

    const cartGigJson = JSON.stringify(cartGigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/RemoveGigFromCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: cartGigJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {

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