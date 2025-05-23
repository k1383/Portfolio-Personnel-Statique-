const navlinks = document.querySelector(".nav-links");
const burgermenu = document.querySelector("#burgermenu")

burgermenu.addEventListener("click", function() {
    navlinks.classList.toggle("active")
})
