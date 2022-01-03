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
// when all the content in the document is loaded, do these things: 

    const createPodForm = document.querySelector('#create-pod-form')

    createPodForm.addEventListener('submit', (e) => createFormHandler(e));
    // Listen for a submit event and if one happens, do the thing in the createFormHandler function
    // console.log("A");
    fetchPods();
    // console.log("B");
    // includes renderPods function
    // fetches the json data from the backend (controller file) and displays it
})

let url = 'http://localhost:3000/pods'

function fetchPods() {
    // console.log("C");
    fetch(url) // returns Promise object (yes it sounds weird)
    .then(res => res.json()) // also returns a Promise object [PENDING FULFILLED REJECTED are your options]
    .then(function(json) {
        //console.log("D");
        renderPods(json)
    })
    // console.log("E - outside the fetch request" );
    //.catch() for errors, undeveloped as yet
}

const fetchStones = () => {
    fetch(board)
    .then(res => res.json())
    .then(function(json) {
        playLivingStones(json);
    })
    .catch(function() {
        deadStones()
    })
}

function renderPods(pods) {
    pods.data.forEach(pod => {
        let newPod = new Pod(pod.id, pod.attributes);
        // because of fast-json we get a nested object, so we need to separate the id from the attributes
        addPodCard(pod);
        console.log(pod);
    })
}

function addPodCard(pod) {

    const body = document.querySelector('#pods-container');
    // define the body as the div with the right id "pods-container"

    const podCard = document.createElement('div');
    podCard.className = "pod-card"
    podCard.setAttribute('data-id', pod.id)
    // create a new div with the class "pod-card" (for the pod, implicit)

    const nameH2 = document.createElement('h2');
    nameH2.innerHTML = `${pod.attributes.plant.name}`
    podCard.appendChild(nameH2);
    // setting up the name   

    // const titleH4 = document.createElement('h4');
    // titleH4.innerHTML = `${pod.attributes.title}`
    // podCard.appendChild(titleH4);

    const total = document.createElement('p');
    total.innerHTML = `Total Planted: ${pod.attributes.total_count}`
    podCard.appendChild(total);
    // how many were planted

    if (pod.attributes.germ_count > 0) {
        const germ = document.createElement('p');
        const germ_percent = ((pod.attributes.germ_count / pod.attributes.total_count) * 100).toFixed(0);
        germ.innerHTML = `Total Germinated: ${pod.attributes.germ_count}<br> Success Rate: ${germ_percent}%`
        podCard.appendChild(germ)
    }

    const settings = document.createElement('p');
    settings.innerHTML = `Season: ${pod.attributes.season}<br> Planting Location: ${pod.attributes.location}<br> Additives Used: ${pod.attributes.additives}<br> Water: ${pod.attributes.water}<br> Packaged in: ${pod.attributes.pkg_year}<br> Planted in: ${pod.attributes.sow_year}`;
    podCard.appendChild(settings);
    // set up the settings: season, package year, etc


    const plantDetails = document.createElement('button');
    // create a button
    plantDetails.innerHTML = 'View Plant Details';
    // give the button text
    plantDetails.addEventListener('click', function() {
        renderPlant(pod.attributes.plant);
    })
    podCard.appendChild(plantDetails);
    // add it to the pod card

    const editPod = document.createElement('button');
    editPod.style.marginLeft = '5px';
    editPod.innerHTML = 'Edit Pod';
    editPod.addEventListener('click', function() {
        const podToEdit = Pod.findById(pod.id);
        renderUpdateForm(podToEdit);
    })
    podCard.appendChild(editPod);

    // LiveCode Like exercise
    const likePod = document.createElement('button');
    likePod.style.marginLeft = '5px';
    likePod.innerHTML = 'Like!';
    // creating button (has not been added to podCard yet)
    const likes = document.createElement('p');
    likes.innerHTML = 0
    podCard.appendChild(likes);
    // creating likes

    likePod.addEventListener('click', function() {
        likes.innerHTML = parseInt(likes.innerHTML) + 1;
        // converting to integer and adding a like 
    })
    podCard.appendChild(likePod);

 

    /* OPEN PLANT DETAILS IN NEW WINDOW CODE
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

    body.appendChild(podCard);
    // append the newly created pod card to the pods-container div
}

function createFormHandler(e) {
    e.preventDefault();

    const plantId = parseInt(document.querySelector('#plants').value)
    const newCount = document.querySelector('#input-total-count').value 
    const newSeason = document.querySelector('#input-season').value 
    const newLocation = document.querySelector('#input-location').value
    const newAdditives = document.querySelector('#input-additives').value
    // soil goes here
    const newWater = document.querySelector('#input-water').value
    const pkgYear = document.querySelector('#input-pkg-year').value
    const sowYear = document.querySelector('#input-sow-year').value
    // grab and assign variables to the value given in each box
    // remember this happens only on the submit button

    postRequestFetch(newCount, newSeason, newLocation, newAdditives, newWater, pkgYear, sowYear, plantId)
    // post/create fetch request, processes the values given
}

function postRequestFetch(total_count, season, location, additives, water, pkg_year, sow_year, plant_id) {
    const input = { total_count, season, location, additives, water, pkg_year, sow_year, plant_id}

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(input)
    })
    .then(res => res.json())
    .then(pod => {
        console.log(pod);
        const newPod = pod.data;

        addPodCard(newPod);
        let newPodJs = new Pod(newPod.id, newPod.attributes);
        // and empty out the data fields, write a function for that later
        document.querySelector("#create-pod-form").reset();
    })
}