import { loadOtherDropdownsData } from "./LoadUserDropdowns";

export async function loadUserData() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/LoadUserData", {
            method: "POST",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                document.getElementById("fname").value = json.fname;
                document.getElementById("lname").value = json.lname;
                document.getElementById("email").value = json.email;
                document.getElementById("password").value = json.password;
                document.getElementById("currentPassword").value = json.password;
                document.getElementById("regDate").value = json.regDate;

                if (json.message === "UPDATED") {
                    document.getElementById("dob").value = json.dob;
                    document.getElementById("line1").value = json.line1;
                    document.getElementById("line2").value = json.line2;
                    document.getElementById("pcode").value = json.pcode;
                    document.getElementById("country").value = String(json.countryId);
                    await loadOtherDropdownsData();
                    document.getElementById("city").value = String(json.cityId);
                    document.getElementById("locale").value = String(json.localeId);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}