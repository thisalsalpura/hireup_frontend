import { toast } from "react-toastify";

export async function loadPendingGigs(setLoading) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadPendingGigs", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            let pendingGigsMain = document.getElementById("pending-gigs-main");
            let pendingGig = document.getElementById("pending-gig");
            let emptyPendingGigs = document.getElementById("empty-pending-gigs");
            pendingGigsMain.innerHTML = "";
            if (json.status) {
                json.allPendingGigsList.forEach(gig => {
                    let pendingGigClone = pendingGig.cloneNode(true);
                    pendingGigClone.removeAttribute("id");
                    pendingGigClone.classList.remove("hidden");
                    emptyPendingGigs.classList.add("hidden");
                    pendingGigClone.querySelector("#pending-gig-title").innerHTML = gig.title;
                    pendingGigClone.querySelector("#pending-gig-category").innerHTML = gig.sub_Category.category.name;
                    pendingGigClone.querySelector("#pending-gig-subcategory").innerHTML = gig.sub_Category.name;
                    pendingGigClone.querySelector("#pending-gig-seller").innerHTML = gig.user.email;
                    pendingGigClone.querySelector("#verify-gig-btn").addEventListener("click", (e) => {
                        verifyGig(setLoading, gig.id);
                    });
                    pendingGigsMain.appendChild(pendingGigClone);
                });
            } else if (json.message === "EMPTY") {
                pendingGig.classList.add("hidden");
                emptyPendingGigs.classList.remove("hidden");
                pendingGigsMain.appendChild(emptyPendingGigs);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

async function verifyGig(setLoading, id) {
    const gigObject = {
        id: id
    };

    const gigJson = JSON.stringify(gigObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/VerifyGig", {
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
                loadPendingGigs(setLoading);
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