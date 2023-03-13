const NumSolarPannels = document.getElementById("total-solar");
const carbonSaved = document.getElementById("carbon-saved");
const allCostField = document.getElementById("all-cost");

let budget = document.getElementById("total-budget")

NumSolarPannels.onblur = function() {
    allCostField.value = (parseInt(NumSolarPannels.value) * 1250).toLocaleString('en-US');
    carbonSaved.value = (parseInt(NumSolarPannels.value) * 1 * 8);

    budget.innerText = allCostField.value;

    // Example usage:
    setData("solar", { cost: allCostField.value, solar: carbonSaved.value });

    // getData("solar")['cost'];
};

// Set data in local storage
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(value);
}

// Get data from local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

//reset data
setData("wind", { cost: 0, wind: NumSolarPannels.value });