import { toast } from "react-toastify";

export async function loadSellerActiveGigsData(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerActiveGigsData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let sellerActiveGigsMain = document.getElementById("seller-active-gigs-main");
            let sellerActiveGig = document.getElementById("seller-active-gig");
            let emptySellerActiveGigs = document.getElementById("empty-seller-active-gigs");
            sellerActiveGigsMain.innerHTML = "";
            if (json.status) {
                json.userGigsList.forEach((gig, i) => {
                    let sellerActiveGigClone = sellerActiveGig.cloneNode(true);
                    sellerActiveGigClone.removeAttribute("id");
                    sellerActiveGigClone.classList.remove("hidden");
                    emptySellerActiveGigs.classList.add("hidden");
                    const imageURL = json.userGigsImagesList[i];
                    sellerActiveGigClone.querySelector("#seller-active-gig-image").src = imageURL;
                    sellerActiveGigClone.querySelector("#seller-active-gig-title").innerHTML = gig.title;
                    sellerActiveGigClone.querySelector("#seller-active-gig-category").innerHTML = gig.sub_Category.category.name;
                    sellerActiveGigClone.querySelector("#seller-active-gig-subcategory").innerHTML = gig.sub_Category.name;
                    sellerActiveGigClone.querySelector("#change-active-gig-visible-btn").addEventListener("click", (e) => {
                        changeToInactiveGig(setLoading, gig.id);
                    });
                    sellerActiveGigsMain.appendChild(sellerActiveGigClone);
                });
            } else if (json.message === "EMPTY") {
                sellerActiveGig.classList.add("hidden");
                emptySellerActiveGigs.classList.remove("hidden");
                sellerActiveGigsMain.appendChild(emptySellerActiveGigs);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function changeToInactiveGig(setLoading, id) {
    const gigObject = {
        id: id
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/ChangeToInactiveGig", {
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