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
    const body = document.querySelector("#plant-info-container");
    const plant = document.getElementById(id);
    body.removeChild(plant);
}

/* IN CASE YOU NEED TO HAVE A WAY TO CREATE NEW PLANTS? 

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