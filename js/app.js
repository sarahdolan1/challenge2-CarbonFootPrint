const solar = document.getElementById("solar");
const wind = document.getElementById("wind");
const hydro = document.getElementById("hydro");
const tree = document.getElementById("tree");
const nuclear = document.getElementById("nuclear");

const totalCostField = document.getElementById("total-cost");
const totalAvailableField = document.getElementById("total-available");

const totalBudgetField = document.getElementById("total-budget");
const NumSolarPannels = document.getElementById("total-solar");
const carbonSaved = document.getElementById("carbon-saved");
const allCostField = document.getElementById("all-cost");
var result = document.getElementById("result");
const footprintImg = document.getElementById("footprint-img");

let solarCost = 1250;

let totalCost = parseInt(totalCostField.innerHTML);
//let totalAvailable = parseInt(totalAvailableField.innerHTML);
let totalAvailable = 61000000;
//totalAvailableField.innerHTML = totalAvailable;

// let totalSolar = parseInt(NumSolarPannels.innerHTML);

// let totalBudget = parseInt(totalBudgetField.innerHTML);

//-------------------------------------------wind -------------------------------------------------

solar.onblur = function() {
    console.log('no of solar pannels' + solar.value);
    console.log('no fo sp ' + parseInt(solar.value));

    // totalCost += parseInt(solar.value);
    totalAvailable -= parseInt(solar.value);
    console.log('parse int total avaiable' + totalAvailable);
    // totalCostField.innerHTML = totalCost;
    totalAvailableField.innerHTML = totalAvailable;

    footprintImg.style.width = (totalAvailable / 61000000) * 30 + "%";
    console.log('total avaiale inner .html ' + totalAvailableField.innerHTML);


};




if (getData("solar")) {
    console.log('hhh' + getData("solar")['solar']);
    solar.setAttribute('value', parseInt(getData("solar")['solar']));
    solar.focus();
    solar.blur();
}


let outsideCosts = 0;

if (getData("solar")) {
    if (getData("solar")['cost']) {
        outsideCosts += parseInt(getData("solar")['cost'].replace(/,/g, ''))

    }
}



if (getData("wind")) {
    console.log(getData("wind"));
    if (getData("wind")['cost']) {
        outsideCosts += parseInt(getData("wind")['cost'].replace(/,/g, ''))
        console.log(outsideCosts);

    }
}
if (getData("tree")) {
    if (getData("tree")['cost']) {
        outsideCosts += parseInt(getData("tree")['cost'].replace(/,/g, ''))

    }
}

if (getData("hydro")) {
    if (getData("hydro")['cost']) {
        outsideCosts += parseInt(getData("hydro")['cost'].replace(/,/g, ''))

    }
}
if (getData("nuclear")) {
    if (getData("nuclear")['cost']) {
        outsideCosts += parseInt(getData("nuclear")['cost'].replace(/,/g, ''))

    }
}


totalCostField.innerText = outsideCosts.toLocaleString('en-us')

setData("index", { cost: outsideCosts, });


wind.onblur = function() {
    // totalCost += parseInt(solar.value);
    console.log('wind onblur' + wind.value);
    totalAvailable -= parseInt(wind.value);
    // totalCostField.innerHTML = totalCost;
    totalAvailableField.innerHTML = totalAvailable;
    footprintImg.style.width = (totalAvailable / 61000000) * 30 + "%";

};



if (getData("wind")) {
    if (getData("wind")['wind']) {
        wind.setAttribute('value', parseInt(getData("wind")['wind']));
        wind.focus();
        wind.blur();
    }
}

tree.onblur = function() {
    // totalCost += parseInt(solar.value);
    totalAvailable -= parseInt(tree.value);
    // totalCostField.innerHTML = totalCost;
    totalAvailableField.innerHTML = totalAvailable;
    footprintImg.style.width = totalAvailable + "%";

};

if (getData("tree")) {
    tree.setAttribute('value', parseInt(getData("tree")['tree']));
    tree.focus();
    tree.blur();
}

hydro.onblur = function() {
    // totalCost += parseInt(solar.value);
    totalAvailable -= parseInt(hydro.value);
    // totalCostField.innerHTML = totalCost;
    totalAvailableField.innerHTML = totalAvailable;
    footprintImg.style.width = (totalAvailable / 61000000) * 30 + "%";

};

if (getData("hydro")) {
    hydro.setAttribute('value', parseInt(getData("hydro")['hydro']));
    hydro.focus();
    hydro.blur();
}


nuclear.onblur = function() {
    // totalCost += parseInt(solar.value);
    totalAvailable -= parseInt(nuclear.value);
    // totalCostField.innerHTML = totalCost;
    totalAvailableField.innerHTML = totalAvailable;
    footprintImg.style.width = (totalAvailable / 61000000) * 30 + "%";

};

if (getData("nuclear")) {
    nuclear.setAttribute('value', parseInt(getData("nuclear")['nuclear']));
    nuclear.focus();
    nuclear.blur();
}











// parseInt(getData("solar")['cost'].replace(/,/g, ''))




// totalSolar.onblur = function () {
//   let newcost = solarCost * parseInt(totalSolar.value);
//   allCostField.innerHTML = newcost;
// };

// Set data in local storage
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get data from local storage
function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}



// setTimeout(function(){
//   document.activeElement = null;
//   console.log('working')
// },5000)

// window.onbeforeunload = function() {
//   // Perform some action, such as saving data, before closing the tab

//   localStorage.clear();
//   // Close the tab programmatically
//   window.open('', '_self').close();

//   // Return null to indicate that the event doesn't require a confirmation prompt
//   return null;
// };



totalAvailableField.innerHTML = totalAvailable.toLocaleString('en-US');

h = 100 - ((totalAvailable / 61000000) * 100);
let finished = new Boolean(false);

setData('percentageReduction', { h });

setData('textvalue', totalAvailable);

console.log(h);

if (totalAvailable <= 29890000) {
    alert('Congrats you have reached the 2030 goal of a 51% reduction. The challenge is finished !\n' + 'Total spent : ' + outsideCosts + '\nTotal Carbon saved ' + totalAvailableField.innerHTML + '\nReduction percent = ' + h);
    finished = true;
}

//if (finished == true) {
//   alert('challenge 2')

//}
if (finished == true) {
    window.location = ('c1done.html')
}