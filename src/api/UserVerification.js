export async function VerifyUser() {
    const verificationCode = document.getElementById("verification").value;

    const userObject = {
        verificationCode: verificationCode
    };

    const userJson = JSON.stringify(userObject);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/UserVerification", {
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
                window.location.href = "/home";
            } else {
                if (json.message === "ENULL") {
                    window.location.href = "/userLogin";
                } else {
                    console.log(json.message);
                }
            }
        } else {
            console.log("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    }
}