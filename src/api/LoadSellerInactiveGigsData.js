import { toast } from "react-toastify";

export async function loadSellerInactiveGigsData(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerInactiveGigsData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let sellerInactiveGigsMain = document.getElementById("seller-inactive-gigs-main");
            let sellerInactiveGig = document.getElementById("seller-inactive-gig");
            let emptySellerInactiveGigs = document.getElementById("empty-seller-inactive-gigs");
            sellerInactiveGigsMain.innerHTML = "";
            if (json.status) {
                json.userGigsList.forEach((gig, i) => {
                    let sellerInactiveGigClone = sellerInactiveGig.cloneNode(true);
                    sellerInactiveGigClone.removeAttribute("id");
                    sellerInactiveGigClone.classList.remove("hidden");
                    emptySellerInactiveGigs.classList.add("hidden");
                    const imageURL = json.userGigsImagesList[i];
                    sellerInactiveGigClone.querySelector("#seller-inactive-gig-image").src = imageURL;
                    sellerInactiveGigClone.querySelector("#seller-inactive-gig-title").innerHTML = gig.title;
                    sellerInactiveGigClone.querySelector("#seller-inactive-gig-category").innerHTML = gig.sub_Category.category.name;
                    sellerInactiveGigClone.querySelector("#seller-inactive-gig-subcategory").innerHTML = gig.sub_Category.name;
                    sellerInactiveGigClone.querySelector("#change-inactive-gig-visible-btn").addEventListener("click", (e) => {
                        changeToActiveGig(setLoading, gig.id);
                    });
                    sellerInactiveGigsMain.appendChild(sellerInactiveGigClone);
                });
            } else if (json.message === "EMPTY") {
                sellerInactiveGig.classList.add("hidden");
                emptySellerInactiveGigs.classList.remove("hidden");
                sellerInactiveGigsMain.appendChild(emptySellerInactiveGigs);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function changeToActiveGig(setLoading, id) {
    const gigObject = {
        id: id
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ChangeToActiveGig", {
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
                toast.success(json.message);
                loadSellerInactiveGigsData(setLoading);
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