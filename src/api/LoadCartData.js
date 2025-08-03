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
            let cardGigSeparator = document.getElementById("card-gig-separator");
            cartGigsMain.innerHTML = "";

            let checkoutGigsListMain = document.getElementById("checkout-gigs-list-main");
            let checkoutGig = document.getElementById("checkout-gig");
            let checkoutTotal = document.getElementById("checkout-total");
            let emptyCheckoutGigs = document.getElementById("empty-checkout-gigs");
            checkoutGigsListMain.innerHTML = "";
            if (json.status) {
                if (json.message === "NEMPTY") {
                    json.userCartGigsList.forEach((gig, i) => {
                        let cartGigClone = cartGig.cloneNode(true);
                        cartGigClone.removeAttribute("id");
                        cartGigClone.classList.remove("hidden");
                        cartGigClone.classList.add("flex");
                        emptyCartGigs.classList.add("hidden");
                        const imageURL = json.userCartGigsImagesList[i];
                        cartGigClone.querySelector("#cart-gig-image").src = imageURL;
                        cartGigClone.querySelector("#cart-gig-seller").innerHTML = gig.gig_Has_Package.gig.user.fname + " " + gig.gig_Has_Package.gig.user.lname;
                        cartGigClone.querySelector("#cart-gig-title").innerHTML = gig.gig_Has_Package.gig.title;
                        cartGigClone.querySelector("#cart-gig-package-type").innerHTML = gig.gig_Has_Package.package_Type.name;
                        cartGigClone.querySelector("#cart-gig-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(gig.gig_Has_Package.price);
                        cartGigClone.querySelector("#remove-cart-gig").addEventListener("click", (e) => {
                            removeFromCart(setLoading, gig.id, gig.gig_Has_Package.id);
                        });
                        cartGigsMain.appendChild(cartGigClone);
                        let cardGigSeparatorClone = cardGigSeparator.cloneNode(true);
                        cardGigSeparatorClone.classList.remove("hidden");
                        cartGigsMain.appendChild(cardGigSeparatorClone);

                        let checkoutGigClone = checkoutGig.cloneNode(true);
                        checkoutGigClone.removeAttribute("id");
                        checkoutGigClone.classList.remove("hidden");
                        checkoutGigClone.classList.add("grid");
                        checkoutTotal.classList.remove("hidden");
                        checkoutTotal.classList.add("flex");
                        emptyCheckoutGigs.classList.add("hidden");
                        emptyCheckoutGigs.classList.remove("grid");
                        checkoutGigClone.querySelector("#ckekout-gig-number").innerHTML = i + 1;
                        checkoutGigClone.querySelector("#checkout-gig-title").innerHTML = gig.gig_Has_Package.gig.title;
                        checkoutGigClone.querySelector("#ckekout-gig-package-type").innerHTML = gig.gig_Has_Package.package_Type.name;
                        checkoutGigClone.querySelector("#checkout-gig-package-price").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(gig.gig_Has_Package.price);
                        checkoutTotal.querySelector("#checkout-amount-value").innerHTML = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(json.checkoutAmount);
                        checkoutGigsListMain.appendChild(checkoutGigClone);
                    });
                } else {
                    cartGig.classList.add("hidden");
                    cartGig.classList.remove("flex");
                    emptyCartGigs.classList.remove("hidden");
                    cartGigsMain.appendChild(emptyCartGigs);

                    checkoutGig.classList.add("hidden");
                    checkoutGig.classList.remove("grid");
                    checkoutTotal.classList.add("hidden");
                    checkoutTotal.classList.remove("flex");
                    emptyCheckoutGigs.classList.remove("hidden");
                    emptyCheckoutGigs.classList.add("grid");
                    checkoutGigsListMain.appendChild(emptyCheckoutGigs);
                }
            } else {
                cartGig.classList.add("hidden");
                cartGig.classList.remove("flex");
                emptyCartGigs.classList.remove("hidden");
                cartGigsMain.appendChild(emptyCartGigs);

                checkoutGig.classList.add("hidden");
                checkoutGig.classList.remove("grid");
                checkoutTotal.classList.add("hidden");
                checkoutTotal.classList.remove("flex");
                emptyCheckoutGigs.classList.remove("hidden");
                emptyCheckoutGigs.classList.add("grid");
                checkoutGigsListMain.appendChild(emptyCheckoutGigs);
            }
            cartGigsMain.appendChild(cartGig);
            cartGigsMain.appendChild(emptyCartGigs);

            checkoutGigsListMain.appendChild(checkoutGig);
            checkoutGigsListMain.appendChild(checkoutTotal);
            checkoutGigsListMain.appendChild(emptyCheckoutGigs);
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function removeFromCart(setLoading, cartId, sessionCartId) {
    const cartGigObject = {
        cartId: cartId,
        sessionCartId: sessionCartId
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
                toast.success(json.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
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