// Bron: shooft (CodePen), basis voor het hamburgermenu: https://codepen.io/shooft/pen/myepoJo
// ChatGPT gaf uitleg en feedback over de koppeling tussen toonMenu en toetsenbordgebruik.
// ALLE ELEMENTEN SELECTEREN

// Knop om het menu te openen
const openButton = document.querySelector(
    "header > nav > ul:first-of-type li:first-of-type button"
);

// Het menu dat uitschuift
const menu = document.querySelector(
    "header > nav > ul:nth-of-type(2)"
);

// Sluit-knop in het menu
const closeButton = document.querySelector(
    "header > nav > ul:nth-of-type(2) li:first-of-type button"
);


// EVENTLISTENERS KOPPELEN

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
window.addEventListener("keydown", sluitMetEscape);


// FUNCTIES

function openMenu() {
    menu.classList.add("toonMenu");
    openButton.setAttribute("aria-expanded", "true");

    // pagina mag niet meer scrollen
    document.body.classList.add("menu-open");
}

function closeMenu() {
    menu.classList.remove("toonMenu");
    openButton.setAttribute("aria-expanded", "false");

    // scrollen weer toestaan
    document.body.classList.remove("menu-open");
}

function sluitMetEscape(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
}