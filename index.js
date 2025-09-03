const btn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-menu");
const hambuger = document.getElementById("hambuger");
const closeBtn = document.getElementById("close");
let showMobileNav = false;
mobileNav.classList.add("hidden");
const checkShowMobileNav = setInterval(() => {
    if (showMobileNav) {
        hambuger.style.display = "none";
        closeBtn.style.display = "block";

    } else {
        hambuger.style.display = "block";
        closeBtn.style.display = "none";
    };

}, 100)


btn.addEventListener("click", () => {
    showMobileNav = !showMobileNav;
    mobileNav.classList.toggle("hidden");
});