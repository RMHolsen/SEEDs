// Mr. Hammond, the phones are working
const test = () => {
    console.log("Mr. Hammond, the phones are working.")
    let body = document.querySelector('body');
    let test = document.createElement('p');
    test.innerHTML = 'Mr. Hammond, the phones are working.';
    test.style.fontSize = "12px";
    test.style.fontFamily = "Verdana";
    body.appendChild(test);
}

document.addEventListener('DOMContentLoaded', function() {
    // When all the content in the document is loaded, do these things: 

    const createPlantForm = document.querySelector("#create-plant-form") // remember that's an id
    // Load the create plant form into the create plant box

    createPlantForm.addEventListener('submit', (e) => 
        createFormHandler(e))
    // Listen for a submit event and if one happens, do the thing in the createFormHandler function

    fetchPlants();
    // includes renderPlants function
    // fetches the data from the api? and jsons it? and displays it? is that the right vocab?
})

let url = 'http://localhost:3000/plants'

function fetchPlants() {
// getting the json data for the plants index page and then applying the function that styles it into HTML
    fetch(url)
    .then(res => res.json())
    /* .then(function(response) {
        return response.json();
    }) alt syntax*/ 
    .then(function(json) {
        renderPlants(json)
    })
    //.catch() for errors, undeveloped as yet
}

function renderPlants(plants) {
// take the json data given in the fetch request
    plants.data.forEach(plant => {
        addPlantCard(plant);

        /* Can also do: 
        plantsMarkup = <some html here>
        document.querySelector(div container id).innerHTML += plantsMarkup
        NO APPARENTLY WE CAN'T?? Tried it, reviewed it, still didn't work. Learning how to do this is evidently for a future day. */
    })
}

function addPlantCard(plant) {
// plant must be a json object and double check that it's the CORRECT json object
    const body = document.querySelector('#plants-container');
    // define the body as the div with the id "plants-container"

    const plantCard = document.createElement('div');
    plantCard.className = "plant-card"
    plantCard.setAttribute('data-id', plant.id)
    // create a new div with the class "plant-card" (for the plant, implicit)

    const nameH2 = document.createElement('h2');
    nameH2.innerHTML = plant.attributes.name;
    plantCard.appendChild(nameH2);
    // this and the following sections append and style the attributes to the plant-card div

    const latinName = document.createElement('p');
    latinName.innerHTML = `Latin Name: ${plant.attributes.latin_name}`;
    plantCard.appendChild(latinName);

    const settings = document.createElement('p');
    settings.innerHTML = `Season: ${plant.attributes.season}<br> Light: ${plant.attributes.light}<br> Water: ${plant.attributes.water}<br> Days to Germination: ${plant.attributes.germ_days}`;
    plantCard.appendChild(settings);

    body.appendChild(plantCard);
    // append the newly created plant card to the plants-container div    
}

function createFormHandler(e) {
    e.preventDefault()
    // prevent the default action, which is to refresh
    // console.log(e)
    const newName = document.querySelector("#input-name").value 
    const newLatinName = document.querySelector("#input-latin-name").value 
    const newSeason = document.querySelector("#input-season").value 
    const newLight = document.querySelector("#input-light").value 
    const newWater = document.querySelector("#input-water").value 
    const newGermDays = document.querySelector("#input-germ-days").value 
    // grab and assign variable names to the value given in each box
    // remember this happens only on the submit button 

    postRequestFetch(newName, newLatinName, newSeason, newLight, newWater, newGermDays);
    // post/create fetch request, processes the values given

}

function postRequestFetch(name, latin_name, season, light, water, germ_days) {
    const input = { name, latin_name, season, light, water, germ_days }
        /* this works because 
        since the keys and values are the same, JS will fill them in automatically
        so JSON.stringify(input) is the same as JSON.stringify({
            name: name,
            latin_name: latin_name... etc 
        just declare everything as a variable up above */

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        // maybe review this but basically, fetch the information at the URL and process it as a post method
        body: JSON.stringify(input)
        })
    .then(res => res.json())
    .then(plant => {
        console.log(plant);
        // logged to console, leaving this here because why not
        const newPlant = plant.data 
        // define a variable as the data in plant.data
        addPlantCard(newPlant);
       // the variable declaration must be done in order to use the function addPlantCard to add it to the bottom of the list 
    })
    // this is where the "and empty out the fields" should go probably
}
