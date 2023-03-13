const NumWind = document.getElementById("total-wind");
const carbonSaved = document.getElementById("carbon-saved");
const allCostField = document.getElementById("all-cost");
const totalBudget = document.getElementById("total-budget");


totalBudget.innerText = getData("index")['cost'].toLocaleString("en-us");

console.log(getData("index")['cost'])

NumWind.onblur = function() {
    allCostField.value = (parseInt(NumWind.value) * 1800000).toLocaleString('en-US');
    carbonSaved.value = parseInt(NumWind.value) * 1000 * 8;

    //update total budget
    totalBudget.innerText = (parseInt(totalBudget.innerText.replace(/,/g, '')) + parseInt(allCostField.value)).toLocaleString('en-us');

    //add data to memory
    setData("wind", { cost: allCostField.value, wind: carbonSaved.value });
};

// Set data in local storage
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}