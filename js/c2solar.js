const NumSolarPannels2 = document.getElementById("total-solar2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");

let budget2 = document.getElementById("total-budget2")

NumSolarPannels2.onblur = function() {
    if (NumSolarPannels2.value <= 18400000) {
        allCostField2.value = (parseInt(NumSolarPannels2.value) * 1250);
        carbonSaved2.value = (parseInt(NumSolarPannels2.value) * 1);
        console.log('carbon footprint solar pannels ' + carbonSaved2.value);
        budget2.innerText = allCostField2.value;
        let previous = JSON.parse(localStorage.getItem('solar2'));
        let previousValue = 0;
        if (previous) {
            previousValue = parseInt(previous.solar2);
        }
        // Example usage:
        setData("solar2", { cost2: allCostField2.value, solar2: parseInt(carbonSaved2.value) + previousValue });
        // getData("solar")['cost'];
    } else {
        alert('there is not enough houses for that amount of solar pannels ')

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

//reset data
//setData("wind2", { cost: 0, wind: carbonSaved2.value });