const navList = document.getElementById("nav__list");
const navButton = document.getElementById("container__options__button");

navButton.addEventListener("click", () => {
    navList.classList.toggle("navlist_show");
});