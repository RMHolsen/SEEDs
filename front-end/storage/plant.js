// Mr. Hammond, the phones are working
const testPlants = () => {
    console.log("Mr. Hammond, the phones are working.")
    let body = document.querySelector('body');
    let test = document.createElement('p');
    test.innerHTML = 'Mr. Hammond, the phones are working.';
    test.style.fontSize = "12px";
    test.style.fontFamily = "Verdana";
    body.appendChild(test);
}

// document.addEventListener('DOMContentLoaded', function() { 
//     testPlants();
//     renderPlant();
// })

// const renderPlant = () => {
//     let url = `http://localhost:3000/plants/${id}`

//     fetch(url)
//     .then(res => res.json())
//     .then(function(json) {
//         console.log(json)
//     })
// }


/* ARTIFACT CODE FOR RENDERING PLANTS ON A SEPARATE PAGE
READD TO PLANT.JS TO RENDER PLANTS ON A SEPARATE PAGE  */

document.addEventListener('DOMContentLoaded', function() { 
    // testPlants();
    // test
    fetchPlants();
    // fetch request, which includes render function
})

const fetchPlants = () => {
    let url = `http://localhost:3000/plants/`
    // plants.all index

    fetch(url)
    .then(res => res.json())
    .then(function(json) {
        //console.log(json);
        renderPlants(json);
        // fetch and render the json
    })
} 

const renderPlants = (plants) => {
    plants.data.forEach(plant => {
        const body = document.querySelector("#plants-container")
        // set the body equal to the plants container only, not the full document body

        const plantCard = document.createElement('div');
        plantCard.className = "plant-card"
        plantCard.setAttribute('data-id', plant.id)
        plantCard.setAttribute('id', plant.id)
        // create a new div with the class plant-card and the data-id and id = the plant object id

        const nameH2 = document.createElement('h2');
        nameH2.innerHTML = plant.attributes.name;
        plantCard.appendChild(nameH2);
        // add the name to the plant card as an h2

        const latinName = document.createElement('p');
        latinName.innerHTML = `Latin Name: ${plant.attributes.latin_name}`;
        plantCard.appendChild(latinName);
        // add the latin name to the plant card as a p

        const settings = document.createElement('p');
        settings.innerHTML = `Season: ${plant.attributes.season}<br> Light: ${plant.attributes.light}<br> Water: ${plant.attributes.water}<br> Days to Germination: ${plant.attributes.germ_days}`;
        plantCard.appendChild(settings);
        // add the settings (water, light, etc) to the plant card as a p with br's

        body.appendChild(plantCard);
        // add the newly created plant card to the plants-container div
    })
} 

    /* OPEN PLANT DETAILS IN NEW WINDOW CODE (from index.js)
    const plantLink = document.createElement('a');
    // create a link element
    //plantLink.setAttribute('class', 'plant-link')
    //plantLink.setAttribute('href', `http://localhost:3000/plants/${pod.attributes.plant.id}`);
    plantLink.setAttribute('href', `plants.html#${pod.attributes.plant.id}`)
    // set the href to the plants show page, targeting the plant id
    plantLink.setAttribute('target', 'blank');
    // cause it to open in a new window
    plantLink.innerHTML = 'View Plant Details';
    podCard.appendChild(plantLink);
    // add it to the pod card */

/*

class Plant {
    constructor(id, plantsAttributes) {
        this.id = id;
        this.name = plantsAttributes.name;
        this.latin_name = plantsAttributes.latin_name;
        this.season = plantsAttributes.season;
        this.water = plantsAttributes.water;
        this.light = plantsAttributes.light;
        this.germ_rate = plantsAttributes.germ_rate;
        Plant.all.push(this);
    }
}

Plant.all = [];
*/