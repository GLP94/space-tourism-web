/* Header */

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

/* Data */

async function fetchedData() {
    const response = await fetch("./data.json");
    if (!response.ok) throw new Error("Can not fetch data.");

    const data = await response.json();
    return data;
};

/* Destination */

let buttonTabs = document.querySelectorAll(".tab button");

async function getDestinationData(n) {
    try{
        const data = await fetchedData();
    
        let destination = data.destinations[n];
        if (!destination) return;

        const planetName = document.getElementById("planetName");
        const planetImage = document.getElementById("planetImage");
        const planetDescription = document.getElementById("planetDescription");
        const planetDistance = document.getElementById("planetDistance");
        const planetTravel = document.getElementById("planetTravel");
    
        if (planetName) planetName.innerText = destination.name;
        if (planetImage) planetImage.src = destination.images.png;
        if (planetImage) planetImage.setAttribute("alt", `${destination.name}`)
        if (planetDescription) planetDescription.innerText = destination.description;
        if (planetDistance) planetDistance.innerText = destination.distance;
        if (planetTravel) planetTravel.innerText = destination.travel;
    }
    catch(error){
        console.error(`Error located - ${error}`);
    }
};

buttonTabs.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const currentSelection = document.querySelector(".tab [aria-selected='true'");
        currentSelection.setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);

        getDestinationData(+button.value);
    })
});

getDestinationData(0);

/* Crew */

const tabCrewButtons = document.querySelectorAll(".tab-crew button");

async function getCrewData(n) {
    try{
        const data = await fetchedData();

        let crew = data.crew[n];
        if (!crew) return;

        const crewName = document.getElementById("crewName");
        const crewImage = document.getElementById("crewImage");
        const crewtBio = document.getElementById("crewBio");
        const crewRole = document.getElementById("crewRole");
    
    
        if (crewName) crewName.innerText = crew.name;
        if (crewImage) crewImage.src = crew.images.png;
        if (crewImage) crewImage.setAttribute("alt", `${crew.name}`)
        if (crewtBio) crewtBio.innerText = crew.bio;
        if (crewRole) crewRole.innerText = crew.role;
    }
    catch(error){
        console.error(`Error located - ${error}`);
    }
};

tabCrewButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const currentSelection = document.querySelector(".tab-crew [aria-selected='true'");
        currentSelection.setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);

        getCrewData(button.value);
    })
});

getCrewData(0);

/* Technology */

const tabTechButtons = document.querySelectorAll(".tab-tech button");

function imageUpdate(tech) {
    const techImage = document.getElementById("techImage");

    if (window.innerWidth > 960){
        techImage.src = tech.images.portrait;
    }
    else{
        techImage.src = tech.images.landscape;
    }
}

let currentTech = null;

async function getTechData(n) {
    try {
        const data = await fetchedData();
    
        let tech = data.technology[n];
        if (!tech) return;

        currentTech = tech;

        const techName = document.getElementById("techName");
        const techImage = document.getElementById("techImage");
        const techDescription = document.getElementById("techDescription");
    
        if (techName) techName.innerText = tech.name;
        
        imageUpdate(tech)

        if (techDescription) techDescription.innerText = tech.description;
    }
    catch(error){
        console.error(`Error located - ${error}`);
    }
}

getTechData(0);

tabTechButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const currentSelection = document.querySelector(".tab-tech [aria-selected='true']");
        currentSelection.setAttribute("aria-selected", false);
        event.target.setAttribute("aria-selected", true);

        getTechData(button.value);
    })
});

window.addEventListener("resize", () => {
    if (currentTech) imageUpdate(currentTech)
})