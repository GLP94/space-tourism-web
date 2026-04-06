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

/* Crew */

const crewName = document.getElementById("crewName");
const crewImage = document.getElementById("crewImage");
const crewtBio = document.getElementById("crewBio");
const crewRole = document.getElementById("crewRole");

const tabCrewButtons = document.querySelectorAll(".tab-crew button");

async function getCrewData(n) {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    let crew = data.crew[n | 0];
    
    crewName.innerText = crew.name;
    crewImage.src = crew.images.png;
    crewImage.setAttribute("alt", `${crew.name}`)
    crewtBio.innerText = crew.bio;
    crewRole.innerText = crew.role;
}

getCrewData();

tabCrewButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let currentSelection = document.querySelector(".tab-crew [aria-selected='true'");
        currentSelection.setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);

        getCrewData(button.value);
    })
})

/* Technology */

const techName = document.getElementById("techName");
const techImage = document.getElementById("techImage");
const techDescription = document.getElementById("techDescription");

const tabTechButtons = document.querySelectorAll(".tab-tech button");

async function getTechData(n) {
    const response = await fetch("./data.json");
    const data = await response.json();
    
    let tech = data.technology[n | 0];
    
    techName.innerText = tech.name;
    techImage.src = tech.images.portrait;
    techImage.setAttribute("alt", `${tech.name}`)
    techDescription.innerText = tech.description;
}

getTechData();