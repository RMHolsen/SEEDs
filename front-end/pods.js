const testPods = () => {
    console.log("Mr. Hammond, the phones are working.")
    let body = document.querySelector('body');
    let test = document.createElement('p');
    test.innerHTML = 'Mr. Hammond, the phones are working.';
    test.style.fontSize = "12px";
    test.style.fontFamily = "Verdana";
    body.appendChild(test);
}

document.addEventListener("DOMContentLoaded", function() {
    clearPodForm();
})

const clearPodForm = () => {
    //clear the fucking form
    const plant = document.getElementById('plants');
    plant.value = plant.firstChild; 
    const totalCount = document.getElementById('input-total-count');
    totalCount.value = '';
    const germCount = document.getElementById('input-germ-count');
    germCount.value = '';
    const season = document.getElementById('input-season');
    season.value = '';
    const location = document.getElementById('input-location');
    location.value = '';
    const additives = document.getElementById('input-additives');
    additives.value = '';
    const water = document.getElementById('input-water');
    water.value = '';
    const pkgYear = document.getElementById('input-pkg-year');
    pkgYear.value = '';
    const sowYear = document.getElementById('input-sow-year');
    sowYear.value = '';
}

const renderUpdateForm = (pod) => {
    const newForm = document.getElementById('new-pod-container');
    newForm.style.display = 'none';
    const updateForm = document.getElementById('update-pod-container');
    updateForm.style.display = 'block';
    // swap out the forms' visibility

    const form = document.getElementById('update-pod-form');
    form.setAttribute('data-id', pod.id)
    // set the form's data id to the pod id

    const plant = document.getElementById('update-plants');
    plant.value = pod.plant_id; 
    const totalCount = document.getElementById('update-total-count');
    totalCount.value = pod.total_count;
    const germCount = document.getElementById('update-germ-count');
    germCount.value = pod.germ_count;
    const season = document.getElementById('update-season');
    season.value = pod.season;
    const location = document.getElementById('update-location');
    location.value = pod.location;
    const additives = document.getElementById('update-additives');
    additives.value = pod.additives;
    const water = document.getElementById('update-water');
    water.value = pod.water;
    const pkgYear = document.getElementById('update-pkg-year');
    pkgYear.value = pod.pkg_year;
    const sowYear = document.getElementById('update-sow-year');
    sowYear.value = pod.sow_year;

    form.addEventListener('submit', e => updateFormHandler(e));
}

const updateFormHandler = (e) => {
    e.preventDefault();
    const podId = e.target.dataset.id;
    // gets the data-id of the form and sets it to the variable podId

    pod = Pod.findById(podId);
    // REMEMBER YOUR DATA TYPES. FINDBYID WORKS ON STRINGS, NOT INTEGERS

    const plantId = document.querySelector('#update-plants').value
    const newCount = document.querySelector('#update-total-count').value 
    const germCount = document.querySelector('#update-germ-count').value
    const newSeason = document.querySelector('#update-season').value 
    const newLocation = document.querySelector('#update-location').value
    const newAdditives = document.querySelector('#update-additives').value
    const newWater = document.querySelector('#update-water').value
    const pkgYear = document.querySelector('#update-pkg-year').value
    const sowYear = document.querySelector('#update-sow-year').value
    // grab and assign variables to the value given in each box
    // remember this happens only on the submit button

    patchRequestFetch(pod, newCount, germCount, newSeason, newLocation, newAdditives, newWater, pkgYear, sowYear, plantId)
    // post/create fetch request, processes the values given
}

const patchRequestFetch = (pod, total_count, germ_count, season, location, additives, water, pkg_year, sow_year, plant_id) => {
    const newInput = { total_count, germ_count, season, location, additives, water, pkg_year, sow_year, plant_id }

    fetch(`http://localhost:3000/pods/${pod.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json",
                  Accept: "application/json" },
        body: JSON.stringify(newInput)
    })
    .then(res => res.json())
    .then(pod => {
        console.log(pod);
        window.location.reload();
        return false;
    })
}


class Pod { 
    constructor(id, podAttributes) {
        this.id = id;
        this.total_count = podAttributes.total_count;
        this.germ_count = podAttributes.germ_count;
        this.season = podAttributes.season;
        this.location = podAttributes.location;
        this.additives = podAttributes.additives;
        this.water = podAttributes.water;
        this.pkg_year = podAttributes.pkg_year;
        this.sow_year = podAttributes.sow_year;
        this.plant_id = podAttributes.plant_id;
        Pod.all.push(this); 
    }
    
    static findById(id) {
        return this.all.find(pod => pod.id === id);
    }
}

Pod.all = [];
