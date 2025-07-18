import { toast } from "react-toastify";

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
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                setTimeout(() => {
                    window.location.href = "/userVerification";
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