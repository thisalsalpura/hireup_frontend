import { toast } from "react-toastify";

export async function loadSellerActiveGigsData(setLoading, setActiveGigs) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerActiveGigsData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                const gigList = json.userGigsList.map((gig, i) => ({
                    ...gig,
                    image: json.userGigsImagesList[i]
                }));
                setActiveGigs(gigList);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

export async function changeToInactiveGig(setLoading, id, activeGigs, setActiveGigs, inactiveGigs, setInactiveGigs) {
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
                const gigToMove = activeGigs.find(gig => gig.id === id);
                if (gigToMove) {
                    setActiveGigs(activeGigs.filter(gig => gig.id !== id));
                    setInactiveGigs([gigToMove, ...inactiveGigs]);
                }
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