import { toast } from "react-toastify";
import { loadUserData } from "./LoadUserData";

export async function userProfileUpdate(setLoading) {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const line1 = document.getElementById("line1").value;
    const line2 = document.getElementById("line2").value;
    const pcode = document.getElementById("pcode").value;
    const countryId = document.getElementById("country").value;
    const cityId = document.getElementById("city").value;
    const localeId = document.getElementById("locale").value;

    const userObject = {
        fname: fname,
        lname: lname,
        dob: dob,
        line1: line1,
        line2: line2,
        pcode: pcode,
        countryId: countryId,
        cityId: cityId,
        localeId: localeId
    };

    const userJson = JSON.stringify(userObject);

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/UserProfileUpdate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: userJson
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                toast.success(json.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                loadUserData();
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