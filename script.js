const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)){
        menu.classList.add("hidden");
        menu.setAttribute
    }
})

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    
    if (!menu.classList.contains("hidden")){
        menu.classList.add("hidden");
        setAttribute("aria-expanded", false);
    }
});

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        hamburger.setAttribute("aria-expanded", true);
    }
});