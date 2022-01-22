// from pods.js, not necessary now with reset in index.js
document.addEventListener("DOMContentLoaded", function() {
    clearPodForm();
})

const clearPodForm = () => {
    //clear the form
    // see reset in index.js 
    // ... wait what does this mean. do I not need to ... what. 
    const plant = document.getElementById('plants');
    plant.value = plant.firstChild; 
    const totalCount = document.getElementById('input-total-count');
    totalCount.value = '';
    const germCount = document.getElementById('input-germ-count');
    if (germCount !== null) {germCount.value = ''};
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