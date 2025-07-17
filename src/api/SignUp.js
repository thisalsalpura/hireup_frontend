export async function SignUp() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userObject = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    };

    const userJson = JSON.stringify(userObject);

    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SignUp", {
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
                window.location.href = "/userVerification";
            } else {
                console.log(json.message);
            }
        } else {
            console.log("Something went wrong! Please try again later.");
        }
    } catch (error) {
        console.log(error);
    }
}