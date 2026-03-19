const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)){
        menu.classList.remove("appear");
        menu.setAttribute
    }
})

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    
    if (menu.classList.contains("appear")){
        menu.classList.remove("appear");
        setAttribute("aria-expanded", false);
    }
});

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!menu.classList.contains("appear")){
        menu.classList.add("appear");
        hamburger.setAttribute("aria-expanded", true);
    }
});