const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

function onClose() {
    menu.classList.add("hidden");
}

function onOpen() {
    menu.classList.remove("hidden");
}

closeBtn.addEventListener("click", onClose);
hamburger.addEventListener("click", onOpen);