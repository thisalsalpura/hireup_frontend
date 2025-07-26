import { toast } from "react-toastify";

export async function updateSellerProfile(setLoading) {

    const about = document.getElementById("about").value;

    const qualificationList = Array.from(
        document.querySelectorAll("#edu-qualification-main .edu-qualification-item:not(#edu-qualification-temp)")
    ).map(qualification => ({
        qualificationName: qualification.querySelector("#edu-qualification-name").textContent.trim(),
        qualificationPlace: qualification.querySelector("#edu-qualification-place").textContent.trim(),
    }));

    const skillList = Array.from(
        document.querySelectorAll("#skill-main .skill-item:not(#skill-temp) #skill-name")
    ).map(skill => skill.textContent.trim().toUpperCase());


    const sellerObject = {
        about: about,
        qualificationList: qualificationList,
        skillList: skillList
    };

    const sellerJson = JSON.stringify(sellerObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SellerProfileUpdate", {
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
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.error(json.message);
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