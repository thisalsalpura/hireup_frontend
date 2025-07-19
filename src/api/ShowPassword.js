export function showPassword(inputId, showBtnIconId, hideBtnIconId) {
    const input = document.getElementById(inputId);
    const showBtnIcon = document.getElementById(showBtnIconId);
    const hideBtnIcon = document.getElementById(hideBtnIconId);

    if (input.type === "password") {
        input.type = "text";
        showBtnIcon.classList.add("flex");
        showBtnIcon.classList.remove("hidden");
        hideBtnIcon.classList.remove("flex");
        hideBtnIcon.classList.add("hidden");
    } else {
        input.type = "password";
        showBtnIcon.classList.remove("flex");
        showBtnIcon.classList.add("hidden");
        hideBtnIcon.classList.add("flex");
        hideBtnIcon.classList.remove("hidden");
    }
}