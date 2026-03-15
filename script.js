const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)){
        menu.classList.add("hidden");
    }
})

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden")
});

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden")
});