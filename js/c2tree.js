const NumTree2 = document.getElementById("total-tree2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");
const totalBudget2 = document.getElementById("total-budget2");

totalBudget2.innerText = getData("index")['cost2'].toLocaleString("en-us");
console.log(getData("index")['cost2'])

NumTree2.onblur = function() {
    if (NumTree2.value <= 400000) {
        allCostField2.value = (parseInt(NumTree2.value) * 2);
        carbonSaved2.value = parseInt(NumTree2.value) * 0.014;
        //update total budget
        totalBudget2.innerText = (parseInt(totalBudget2.innerText.replace(/,/g, '')) + parseInt(allCostField2.value)).toLocaleString('en-us');

        let targetYear = parseInt(getData("index")['year']) + 6;
        let previous = JSON.parse(localStorage.getItem('tree2'));
        console.log('previous' + previous)
        let previousValue = 0;
        if (previous) {
            previousValue = parseInt(previous.tree2);
        }
        //add data to memory
        setData("tree2", { cost2: allCostField2.value, tree2: parseInt(carbonSaved2.value) + previousValue, year: targetYear });
    } else {
        alert('There is not enough space for that amount of trees  ')

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