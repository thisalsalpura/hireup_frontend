import { toast } from "react-toastify";

export async function updateSellerProfile(setLoading) {

    const about = document.getElementById("about").value;

    const qualificationList = Array.from(
        document.querySelectorAll("#edu-qualification-main .edu-qualification-item:not(#edu-qualification-temp)")
    ).map(qualification => ({
        qualificationName: qualification.querySelector("#edu-qualification-name").textContent,
        qualificationPlace: qualification.querySelector("#edu-qualification-place").textContent,
    }));

    const skillList = Array.from(
        document.querySelectorAll("#skill-main .skill-item:not(#skill-temp) skill-name")
    ).map(skill => skill.textContent);


    const sellerObject = {
        about: about,
        qualificationList: qualificationList,
        skillList: skillList
    };

    const sellerJson = JSON.stringify(sellerObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SellerProfileUpdate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: sellerJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {

            } else {

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