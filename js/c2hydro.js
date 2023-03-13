const totalHydroField2 = document.getElementById("total-hydro2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");
const totalBudget2 = document.getElementById("total-budget2");


totalBudget2.innerText = getData("index")['cost2'].toLocaleString("en-us");

console.log(getData("index")['cost2'])


totalHydroField2.onblur = function() {
    allCostField2.value = (parseInt(totalHydroField2.value) * 2500);
    carbonSaved2.value = parseInt(totalHydroField2.value) * 7;

    //update total budget
    totalBudget2.innerText = (parseInt(totalBudget2.innerText.replace(/,/g, '')) + parseInt(allCostField2.value)).toLocaleString('en-us');

    let targetYear = parseInt(getData("index")['year']) + 1;
    let previous = JSON.parse(localStorage.getItem('hydro2'));
    console.log('previous' + previous)
    let previousValue = 0;
    if (previous) {
        previousValue = parseInt(previous.hydro2);
    }
    //add data to memory
    setData("hydro2", { cost2: allCostField2.value, hydro2: parseInt(carbonSaved2.value) + previousValue, year: targetYear });

};

// Set data in local storage
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}