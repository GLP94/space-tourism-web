/* Shared */

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

/* Destination */

const planetName = document.getElementById("planetName");
const planetImage = document.getElementById("planetImage");
const planetDescription = document.getElementById("planetDescription");
const planetDistance = document.getElementById("planetDistance");
const planetTravel = document.getElementById("planetTravel");

const tabButtons = document.querySelectorAll(".tab > li > button");

async function getData(n) {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    let destination = data.destinations[0 | n];
    
    planetName.innerText = destination.name;
    planetImage.src = destination.images.png;
    planetDescription.innerText = destination.description;
    planetDistance.innerText = destination.distance;
    planetTravel.innerText = destination.travel;
}

getData()
tabButtons.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.setAttribute("aria-selected", true)
    let tabActive = document.querySelector(`[aria-selected="true"] > button`);
    getData(tabActive.value);
})