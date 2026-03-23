/* TOGGLE MENU */
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

/* FORM VALIDATION */
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}