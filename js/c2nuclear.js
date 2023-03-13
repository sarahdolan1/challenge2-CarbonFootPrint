const NumNuclear2 = document.getElementById("total-nuclear2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");
const totalBudget2 = document.getElementById("total-budget2");

totalBudget2.innerText = getData("index")['cost2'].toLocaleString("en-us");
console.log(getData("index")['cost2'])

NumNuclear2.onblur = function() {
    if (NumNuclear2.value <= 1) {
        allCostField2.value = (parseInt(NumNuclear2.value) * 22000000000);
        carbonSaved2.value = parseInt(NumNuclear2.value) * 5100000;
        //update total budget
        totalBudget2.innerText = (parseInt(totalBudget2.innerText.replace(/,/g, '')) + parseInt(allCostField2.value)).toLocaleString('en-us');
        let targetYear = parseInt(getData("index")['year']) + 6;
        let previous = JSON.parse(localStorage.getItem('nuclear2'));
        console.log('previous' + previous)
        let previousValue = 0;
        if (previous) {
            previousValue = parseInt(previous.nuclear2);
        }
        //add data to memory
        setData("nuclear2", { cost2: allCostField2.value, nuclear2: parseInt(carbonSaved2.value) + previousValue, year: targetYear });
    } else {
        console.log('bug' + NumNuclear2.value)
        alert('you are not allowed that many ')

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