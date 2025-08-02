import { toast } from "react-toastify";

export async function loadSellerInactiveGigsData(setLoading, setInactiveGigs) {
    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadSellerInactiveGigsData", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                console.log(json);
                const gigList = json.userGigsList.map((gig, i) => ({
                    ...gig,
                    image: json.userGigsImagesList[i]
                }));
                setInactiveGigs(gigList);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

export async function changeToActiveGig(setLoading, id, activeGigs, setActiveGigs, inactiveGigs, setInactiveGigs) {
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
                const gigToMove = inactiveGigs.find(gig => gig.id === id);
                if (gigToMove) {
                    setInactiveGigs(inactiveGigs.filter(gig => gig.id !== id));
                    setActiveGigs([gigToMove, ...activeGigs]);
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