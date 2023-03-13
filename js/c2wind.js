const NumWind2 = document.getElementById("total-wind2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");
const totalBudget2 = document.getElementById("total-budget2");


totalBudget2.innerText = getData("index")['cost2'].toLocaleString("en-us");

console.log(getData("index")['cost2'])


NumWind2.onblur = function() {
    if (NumWind2.value <= 582) {
        allCostField2.value = (parseInt(NumWind2.value) * 1800000);
        carbonSaved2.value = parseInt(NumWind2.value) * 1000;

        //update total budget
        totalBudget2.innerText = (parseInt(totalBudget2.innerText.replace(/,/g, '')) + parseInt(allCostField2.value)).toLocaleString('en-us');

        let targetYear = parseInt(getData("index")['year']) + 2;

        console.log('target year' + targetYear)
        let previous = JSON.parse(localStorage.getItem('wind2'));
        console.log('previous' + previous)
        let previousValue = 0;
        if (previous) {
            previousValue = parseInt(previous.wind2);
        }
        console.log(previous + ' previous');
        console.log('previous value' + previousValue);


        //add data to memory
        setData("wind2", { cost2: allCostField2.value, wind2: parseInt(carbonSaved2.value) + previousValue, year: targetYear });
    } else {
        alert("You have exceeded the max amount");
    }
};

// Set data in local storage
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}