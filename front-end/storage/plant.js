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

document.addEventListener('DOMContentLoaded', function() { 
    testPlants();
    renderPlant();
})

const renderPlant = () => {
    let url = `http://localhost:3000/plants/${id}`

    fetch(url)
    .then(res => res.json())
    .then(function(json) {
        console.log(json)
    })
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