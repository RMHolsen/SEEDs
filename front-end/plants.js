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

/* NOW IT'S ARTIFACT CODE FOR RENDERING PLANTS ON A SEPARATE PAGE
UNCOMMENT OUT TO RENDER PLANTS ON A SEPARATE PAGE 

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
} */

/* RENDER A SINGLE PLANT ON THE RIGHT HAND SIDE */
const renderPlant = (plant) => {
    
    const body = document.querySelector("#plant-info-container")
    // set the body equal to the plant details column only, not the full page

    const plantCard = document.createElement('div');
    plantCard.className = "plant-card"
    plantCard.setAttribute('id', `plant_${plant.id}`)
    // this is mostly for styling, I think

    const nameH2 = document.createElement('h2');
    nameH2.innerHTML = plant.name;
    plantCard.appendChild(nameH2);

    const latinName = document.createElement('p');
    latinName.innerHTML = `Latin Name: ${plant.latin_name}`;
    plantCard.appendChild(latinName);

    const settings = document.createElement('p');
    settings.innerHTML = `Season: ${plant.season}<br> Light: ${plant.light}<br> Water: ${plant.water}<br> Days to Germination: ${plant.germ_days}`;
    plantCard.appendChild(settings);

    const notes = document.createElement('p');
    notes.innerHTML = `<b>Notes:</b> ${plant.notes}`;
    plantCard.appendChild(notes);

    const clearButton = document.createElement('button');
    clearButton.innerHTML = 'Clear Info'
    clearButton.addEventListener('click', function() {
        clearInfo(`plant_${plant.id}`);
    })
    plantCard.appendChild(clearButton); 

    body.appendChild(plantCard);
}

const clearInfo = (id) => {
    const body = document.getElementById(id) ;
    body.innerHTML = "";
}

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