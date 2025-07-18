export async function signOut() {
    try {
        const response = await fetch("http://localhost:8080/hireup_backend/SignOut", {
            method: "GET",
            credentials: "include"
        });

        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                window.location.href = "/userLogin";
            } else {
                window.location.reload();
            }
        }
    } catch (error) {
        console.log(error);
    }
}