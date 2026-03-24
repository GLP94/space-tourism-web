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

async function getData() {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    planetName.innerText = data.destinations[0].name;
    planetImage.src = data.destinations[0].images.png;
    planetDescription.innerText = data.destinations[0].description;
    planetDistance.innerText = data.destinations[0].distance;
    planetTravel.innerText = data.destinations[0].travel;
}

getData()