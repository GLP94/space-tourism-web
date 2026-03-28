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

const tabButtons = document.querySelectorAll(".tab > button");

async function getData(n) {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    let destination = data.destinations[n | 0];
    
    planetName.innerText = destination.name;
    planetImage.src = destination.images.png;
    planetImage.setAttribute("alt", `${destination.name}`)
    planetDescription.innerText = destination.description;
    planetDistance.innerText = destination.distance;
    planetTravel.innerText = destination.travel;
}

getData();

let buttonTabs = document.querySelectorAll(".tab button");

buttonTabs.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let currentSelection = document.querySelector(".tab [aria-selected='true'");
        currentSelection.setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);

        getData(button.value);
    })
})

