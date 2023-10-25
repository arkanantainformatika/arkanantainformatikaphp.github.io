let body = document.getElementById("body");
const icon = document.getElementById("icon");
function toggleDarkMode() {
    body.classList.toggle("darkMode")
    if (body.classList.contains("darkMode")) {
        icon.className = "fas fa-sun"
    } else {
        icon.className = "fas fa-moon"
    }
}