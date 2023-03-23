const solar2 = document.getElementById("solar2");
const wind2 = document.getElementById("wind2");

const house = document.getElementById("house");
const tree2 = document.getElementById("tree2");
const hydro2 = document.getElementById("hydro2");

const nuclear2 = document.getElementById("nuclear2");
const transport = document.getElementById("transport");
const totalCostField2 = document.getElementById("total-cost2");
const totalAvailableField2 = document.getElementById("total-available2");

const totalBudgetField2 = document.getElementById("total-budget2");
const totalSolarField2 = document.getElementById("total-solar2");
const carbonSaved2 = document.getElementById("carbon-saved2");
const allCostField2 = document.getElementById("all-cost2");
const footprintImg = document.getElementById("footprint-img");

let solarCost2 = 1250;

let totalCost2 = parseInt(totalCostField2.innerHTML);
let totalAvailable2 = parseInt(totalAvailableField2.innerHTML);



// let totalSolar = parseInt(totalSolarField2.innerHTML);

// let totalBudget = parseInt(totalBudgetField2.innerHTML);

//-------------------------------------------wind2 -------------------------------------------------

if (!getData('currentYear')) {
    setData('currentYear', 1);
    setData("wind2", { wind2: 0, year: 9 });
    setData("solar2", { solar2: 0, year: 9 });
    setData("nuclear2", { nuclear2: 0, year: 9 });
    setData("hydro2", { hydro2: 0, year: 9 });
    setData("tree2", { tree2: 0, year: 9 });
    setData("borrow", 0);





}

function updateTotal(num) {
    totalAvailable2 -= num;
    totalReduce += num;
    totalAvailableField2.innerHTML = totalAvailable2;
    footprintImg.style.width = `${totalAvailable2}%`
}

let year = 1;


document.getElementById("one").addEventListener("click", function(e) {
    year = 1
    yearchange(year, "one")
    console.log(e)
})
document.getElementById("two").addEventListener("click", function(e) {
    year = 2
    yearchange(year, "two")
    console.log(e)

})
document.getElementById("three").addEventListener("click", function(e) {
    year = 3
    yearchange(year, "three")
})
document.getElementById("four").addEventListener("click", function(e) {
    year = 4
    yearchange(year, "four")
})
document.getElementById("five").addEventListener("click", function(e) {
    year = 5
    yearchange(year, "five")
})
document.getElementById("six").addEventListener("click", function(e) {
    year = 6
    yearchange(year, "six")
})
document.getElementById("seven").addEventListener("click", function(e) {
    year = 7
    yearchange(year, "seven")
})
document.getElementById("eight").addEventListener("click", function(e) {
    year = 8
    yearchange(year, "eight")
})


let yearsIndicator = document.querySelectorAll('.containerdots label');

// yearsIndicator.forEach(e => {
//     e.addEventListener('click', function() {
//         let data = e.getAttribute('for');

// switch (data) {
//     case 'one':
//         year = 1;
//         yearchange(year, 'one')
//         break;

//     case 'two':
//         year = 2;
//         yearchange(year, 'two')
//         break;

//     case 'three':
//         year = 3;
//         yearchange(year, 'three')
//         break;

//     case 'four':
//         year = 4;
//         yearchange(year, 'four')
//         break;

//     case 'five':
//         year = 5;
//         yearchange(year, 'five')
//         break;

//     case 'fix':
//         year = 6;
//         yearchange(year, 'fix')
//         break;

//     case 'seven':
//         year = 7;
//         yearchange(year, 'seven')
//         break;

//     case 'eight':
//         year = 8;
//         yearchange(year, 'eight')
//         break;



// }

// })
// });



let totalReduce = 0;





// solar2.onblur = function() {
//     // totalCost2 += parseInt(solar2.value);
//     totalAvailable2 -= parseInt(getData("solar2")['solar2']);
//     totalReduce += parseInt(getData("solar2")['solar2']);
//     // totalCostField2.innerHTML = totalCost2;
//     totalAvailableField2.innerHTML = totalAvailable2;
//     footprintImg.style.width = totalAvailable2 + "%";

// };


if (getData("solar2")) {
    // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));

    solar2.innerText = getData("solar2")['solar2'];
    updateTotal(parseInt(getData("solar2")['solar2']));
}

function windcarbon() {
    if (getData("wind2")) {
        // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));
        let getWind = getData("wind2");
        wind2.innerText = getData("wind2")['wind2'];
        console.log('year: ' + year + ' get wind.targer ' + parseInt(getWind.year));

        if (parseInt(year) >= parseInt(getWind.year)) {
            updateTotal(parseInt(getData("wind2")['wind2']));
        }
    }
}
if (getData("wind2")) {
    // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));
    let getWind = getData("wind2");
    wind2.innerText = getData("wind2")['wind2'];


}

function hydroCarbon() {
    if (getData("hydro2")) {
        // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));
        let getHydro = getData("hydro2");
        hydro2.innerText = getData("hydro2")['hydro2'];
        console.log('year: ' + year + ' get hydro.targer ' + parseInt(getHydro.year));

        if (parseInt(year) >= parseInt(getHydro.year)) {
            updateTotal(parseInt(getData("hydro2")['hydro2']));
        }
    }

}
if (getData("hydro2")) {
    // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));

    hydro2.innerText = getData("hydro2")['hydro2'];
    // updateTotal(parseInt(getData("hydro2")['hydro2']));
}

function NuclearCarbon() {
    if (getData("nuclear2")) {
        // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));
        let getNuclear = getData("nuclear2");
        nuclear2.innerText = getData("nuclear2")['nuclear2'];
        console.log('year: ' + year + ' get nuclear.targer ' + parseInt(getNuclear.year));

        if (parseInt(year) >= parseInt(getNuclear.year)) {
            updateTotal(parseInt(getData("nuclear2")['nuclear2']));
        }
    }

}
if (getData("nuclear2")) {
    // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));

    nuclear2.innerText = getData("nuclear2")['nuclear2'];
    //  updateTotal(parseInt(getData("nuclear2")['nuclear2']));
}


if (getData("tree2")) {
    // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));

    tree2.innerText = getData("tree2")['tree2'];
    //  updateTotal(parseInt(getData("tree2")['tree2']));
}

function treeCarbon() {
    if (getData("tree2")) {
        // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));
        let getTree = getData("tree2");
        tree2.innerText = getData("tree2")['tree2'];
        console.log('year: ' + year + ' get tree2.targer ' + parseInt(getTree.year));

        if (parseInt(year) >= parseInt(getTree.year)) {
            updateTotal(parseInt(getData("tree2")['tree2']));
        }
    }

}
//-------------------------------------------wind2 -------------------------------------------------

// wind2.onblur = function() {
//     // totalCost2 += parseInt(wind2.value);
//     totalAvailable2 -= parseInt(wind2.value);
//     totalReduce += parseInt(wind2.value);
//     // totalCostField2.innerHTML = totalCost2;
//     totalAvailableField2.innerHTML = totalAvailable2;
//     footprintImg.style.width = totalAvailable2 + "%";


// };
// if (getData("wind2")) {
//     // solar2.setAttribute('value', parseInt(getData("solar2")['solar2']));

//     wind2.innerText = getData("wind2")['wind2'];
//     updateTotal(parseInt(getData("wind2")['wind2']));
// }

// function addWind() {



//     if (getData("wind2")) {
//         let targetYear = getData("wind2")['year'];


//         if (parseInt(year) >= parseInt(targetYear)) {

//             console.log('wind 2 ur')
//             if (getData("wind2")['wind2']) {
//                 wind2.setAttribute('value', parseInt(getData("wind2")['wind2']));
//                 wind2.focus();
//                 wind2.blur();
//             }
//         }
//     }

// }
//-------------------------------------------tree2 -------------------------------------------------

// tree2.onblur = function() {
//     // totalCost2 += parseInt(tree2.value);
//     totalAvailable2 -= parseInt(tree2.value);
//     totalReduce += parseInt(tree2.value)
//         //totalCostField2.innerHTML = totalCost2;
//     totalAvailableField2.innerHTML = totalAvailable2;
//     footprintImg.style.width = totalAvailable2 + "%";
// };


// function addTree() {

//     if (getData("tree2")) {
//         let targetYear = getData("tree2")['year'];


//         if (parseInt(year) >= parseInt(targetYear)) {

//             if (getData("tree2")['tree2']) {
//                 tree2.setAttribute('value', parseInt(getData("tree2")['tree2']));
//                 tree2.focus();
//                 tree2.blur();
//             }
//         }
//     }

// }


//-------------------------------------------hydro2 -------------------------------------------------
// hydro2.onblur = function() {
//     // totalCost2 += parseInt(hydro2.value);
//     totalAvailable2 -= parseInt(hydro2.value);
//     totalReduce += parseInt(hydro2.value);
//     //totalCostField2.innerHTML = totalCost2;
//     totalAvailableField2.innerHTML = totalAvailable2;
//     footprintImg.style.width = totalAvailable2 + "%";
// };


// function addHydro() {


//     if (getData("hydro2")) {

//         let targetYear = getData("hydro2")['year'];

//         if (parseInt(year) >= parseInt(targetYear)) {
//             if (getData("hydro2")['hydro2']) {
//                 hydro2.setAttribute('value', parseInt(getData("hydro2")['hydro2']));
//                 hydro2.focus();
//                 hydro2.blur();
//             }
//         }
//     }

// }


//-------------------------------------------nuclear2 -------------------------------------------------

// nuclear2.onblur = function() {
//     // totalCost2 += parseInt(nuclear2.value);
//     totalAvailable2 -= parseInt(nuclear2.value);
//     totalReduce += parseInt(nuclear2.value);
//     //totalCostField2.innerHTML = totalCost2;
//     totalAvailableField2.innerHTML = totalAvailable2;
//     footprintImg.style.width = totalAvailable2 + "%";
// };

// function addNuclear() {


//     if (getData("nuclear2")) {

//         let targetYear = getData("nuclear2")['year'];

//         if (parseInt(year) >= parseInt(targetYear)) {
//             if (getData("nuclear2")['nuclear2']) {
//                 nuclear2.setAttribute('value', parseInt(getData("nuclear2")['nuclear2']));
//                 nuclear2.focus();
//                 nuclear2.blur();
//             }
//         }
//     }

// }
/*
if (getData("nuclear2")) {
    if (getData("nuclear2")['nuclear2']) {
        nuclear2.setAttribute('value', parseInt(getData("nuclear2")['nuclear2']));
        nuclear2.focus();
        nuclear2.blur();
    }
}
*/

let outsideCosts2 = 0;
console.log('hello');

// console.log(getData("solar2")['cost2'])
//-------------------------------------------------------- carbon cost + momey  -------------------------
if (getData("solar2")) {
    if (getData("solar2")['cost2']) {
        outsideCosts2 += parseInt(getData("solar2")['cost2'].replace(/,/g, ''));
        console.log('solar cost' + outsideCosts2);

    }
}

if (getData("wind2")) {
    if (getData("wind2")['cost2']) {
        outsideCosts2 += parseInt(getData("wind2")['cost2'].replace(/,/g, ''));
        console.log('wind cost' + outsideCosts2);


    }
}


if (getData("hydro2")) {
    if (getData("hydro2")['cost2']) {
        outsideCosts2 += parseInt(getData("hydro2")['cost2'].replace(/,/g, ''));
        console.log('wind cost' + outsideCosts2);

    }
}

if (getData("nuclear2")) {
    if (getData("nuclear2")['cost2']) {
        outsideCosts2 += parseInt(getData("nuclear2")['cost2'].replace(/,/g, ''));
        console.log('nuclear2 cost' + outsideCosts2);

    }
}

if (getData("tree2")) {
    if (getData("tree2")['cost2']) {
        outsideCosts2 += parseInt(getData("tree2")['cost2'].replace(/,/g, ''));
        console.log('tree2 cost' + outsideCosts2);

    }
}
//console.log(getData("solar2"));


// function addWindCost() {
//     if (getData("wind2")) {

//         let targetYear = getData("wind2")['year'];
//         if (getData("wind2")['cost2']) {
//             outsideCosts2 += parseInt(getData("wind2")['cost2'].replace(/,/g, ''))
//             totalCostField2.innerText = outsideCosts2.toLocaleString('en-us')
//                 // totalCostField2.innerText = outsideCosts2.toLocaleString('en-us')
//             if (parseInt(year) >= parseInt(targetYear)) {




//             }
//         }
//     }
// }


// function addTreeCost() {
//     console.log('tree 2 working')
//     if (getData("tree2")) {

//         let targetYear = getData("tree2")['year'];


//         if (parseInt(year) >= parseInt(targetYear)) {
//             if (getData("tree2")['cost2']) {
//                 outsideCosts2 += parseInt(getData("tree2")['cost2'].replace(/,/g, ''))
//                 totalCostField2.innerText = outsideCosts2.toLocaleString('en-us')
//             }
//         }
//     }

// }

// function addNuclearCost() {
//     console.log('nuclear 2 working')
//     if (getData("nuclear2")) {

//         let targetYear = getData("nuclear2")['year'];


//         if (parseInt(year) >= parseInt(targetYear)) {
//             if (getData("nuclear2")['cost2']) {
//                 outsideCosts2 += parseInt(getData("nuclear2")['cost2'].replace(/,/g, ''))
//                 totalCostField2.innerText = outsideCosts2.toLocaleString('en-us')
//             }
//         }
//     }

// }

// function addHydroCost() {

//     if (getData("hydro2")) {

//         let targetYear = getData("hydro2")['year'];

//         if (parseInt(year) >= parseInt(targetYear)) {


//             if (getData("hydro2")['cost2']) {
//                 outsideCosts2 += parseInt(getData("hydro2")['cost2'].replace(/,/g, ''))

//                 totalCostField2.innerText = outsideCosts2.toLocaleString('en-us')
//             }
//         }
//     }

// }

// if (getData("nuclear2")) {
//     if (getData("nuclear2")['cost2']) {
//         outsideCosts2 += parseInt(getData("nuclear2")['cost2'].replace(/,/g, ''))
//     }
// }


// if (getData("wind2")) {
//     console.log(getData("wind2"));
//     if (getData("wind2")['cost2']) {
//         outsideCosts2 += parseInt(getData("wind2")['cost2'].replace(/,/g, ''))
//         console.log(outsideCosts2);

//     }
// }
// if (getData("tree2")) {
//     if (getData("tree2")['cost2']) {
//         outsideCosts2 += parseInt(getData("tree2")['cost2'].replace(/,/g, ''))

//     }
// }

// if (getData("hydro2")) {
//     if (getData("hydro2")['cost2']) {
//         outsideCosts2 += parseInt(getData("hydro2")['cost2'].replace(/,/g, ''))

//     }
// }
console.log('oc', outsideCosts2);


totalCostField2.innerText = outsideCosts2.toLocaleString('en-us');


if (getData("index")) {


    if (getData("index")['radio']) {


        setTimeout(function() {
            document.querySelector('label[for="' + getData("index")['radio'] + '"]').click();
        }, 500)

        setData("index", { cost2: outsideCosts2, year: year, radio: getData("index")['radio'] });
    }
} else {
    setData("index", { cost2: outsideCosts2, year: year });
}


// parseInt(getData("solar2")['cost'].replace(/,/g, ''))




// totalSolar.onblur = function () {
//   let newcost = solarCost2 * parseInt(totalSolar.value);
//   allCostField2.innerHTML = newcost;
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

let borrow;
let borrowInterest = 3;

let totalInterest = 0;

let yearBudget = document.querySelector('#year-budget');

function borrowHandeler() {
    borrow = prompt("Enter an amount to borrow from the EU: ");
    setData('borrow', borrow);
    yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('borrow'));


}




//set borrow data again after refresh
if (getData('borrow')) {
    if (getData('borrow')) {
        yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('borrow'));
    }
}


let tax;

function taxHandeler() {
    tax = prompt("Enter a percentage to increase taxes by");
    setData('tax', tax);
    // yearBudget.innerText = Number(yearBudget.innerText) + (Number(getData('tax')['amount']) / 100) * Number(yearBudget.innerText)
    yearBudget.innerText = Number(yearBudget.innerText) + (Number(getData('tax')) / 100) * 93000000000

}

function ReallocatesocialProtectionHandeler() {
    alert('you`re borrowing 3 billion ')
    let reallocate = 3000000000;
    setData('reallocate', reallocate);
    yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('reallocate'));


}


function ReallocateHousing() {
    alert('you`re borrowing 720,000,000')
    let reallocate = 720000000;
    setData('reallocate1', reallocate);
    yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('reallocate1'));


}

function ReacclocateTransport() {
    alert('you`re borrowing 420,000,000')
    let reallocate = 420000000;
    setData('reallocate1', reallocate);
    yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('reallocate1'));


}

function ReallocateEducationHandeler() {
    alert('you`re borrowing 1.2 billion ')
    let reallocate = 1200000000;
    setData('reallocate1', reallocate);
    yearBudget.innerText = Number(yearBudget.innerText) + Number(getData('reallocate1'));


}
//set tax data again after refresh
if (getData('tax')) {
    if (getData('tax')['amount']) {
        yearBudget.innerText = Number(yearBudget.innerText) + (Number(getData('tax')['amount']) / 100) * Number(yearBudget.innerText)
    }
}

if (getData('reallocate')) {
    if (getData('reallocate')['amount']) {
        yearBudget.innerText = Number(yearBudget.innerText);
    }
}
if (getData('reallocate1')) {
    if (getData('reallocate1')['amount']) {
        yearBudget.innerText = Number(yearBudget.innerText);
    }
}



//2023 Predicted Carbon footprint Reduction



function reducer() {
    setData('reduce', { amount: totalReduce })
    document.querySelector('#car-red').innerText = getData('reduce')['amount'];
}

reducer();




function calculateBorrow(year) {
    if (year > 1) {
        if (getData('borrow')) {
            if (getData('borrow')['amount']) {
                //     let interest = ((borrowInterest / 100) * Number(getData('borrow')['amount'])) * year;
                let interest = ((borrowInterest / 100) * Number(getData('borrow')['amount']));

                totalInterest += interest;
                yearBudget.innerText = Number(yearBudget.innerText) - interest;
            }
        }

    }
}

function calculateTax(year) {
    if (year > 1) {
        if (getData('tax')) {
            if (getData('tax')['amount']) {
                let tax = (Number((getData('tax')['amount']) / 100) * Number(yearBudget.innerText)) * year;
                yearBudget.innerText = Number(yearBudget.innerText) + tax;
            }
        }

    }
}


function updateChart() {
    if (getData('borrow')) {
        yValues[4] = totalInterest;
        mychart.update();

        console.log(totalInterest)
    }
    if (getData('reallocate')) {
        yvalues[1] = reallocate;
        mychart.update();

    }

}





function finYear1() {


    if (yearBudget.innerText > outsideCosts2) {
        if (year == 8 && totalAvailable2 < 29890000) {
            alert('Congratulations !!\n The total carbon footprint reduced is less than 29,890,000 on the final year. You have met the 2030 Carbon Goal. ')

        } else if (year != 8) {
            alert('Congrats please move to the next year ');

        } else {
            alert('You must reduce your carbon footprint to 29890000')
        }

    } else {
        alert('You need to borrow more / spend less ');
    }



}







/*updateButton.addEventListener('click', function() {
    console.log('soup');
    if (!showBudget) {
        document.getElementById('showBudget').innerHTML = "<p> hello </p>";
    } else {
        document.getElementById('showBudget').innerHTML = "<p> bye </p>";
    }
});
*/

totalAvailableField2.innerHTML = totalAvailable2.toLocaleString('en-US');


function yearchange(year1, radio) {
    if (parseInt(getData('currentYear')) === year1) {
        return
    }
    outsideCosts2 = 0;
    let getWind = getData("wind2");
    let getSolar = getData("solar2");
    let getNuclear = getData("nuclear2");
    let getTree = getData("tree2");
    let getHydro = getData("hydro2");
    setData("wind2", { cost2: 0, wind2: getWind.wind2, year: getWind.year });

    setData("solar2", { cost2: 0, solar2: getSolar.solar2, year: getSolar.year });
    setData("nuclear2", { cost2: 0, nuclear2: getNuclear.nuclear2, year: getNuclear.year });
    setData("tree2", { cost2: 0, tree2: getTree.tree2, year: getTree.year });
    setData("hydro2", { cost2: 0, hydro2: getHydro.hydro2, year: getHydro.year });
    setData("borrow", 0);
    yearBudget.innerText = 5000000000;
    totalCostField2.innerHTML = 0;
    interest = 0;
    tax = 0;
    console.log('year change')
    console.log(year, year1)
        // addWind();
        // addWindCost();

    // addHydro();
    // addHydroCost();

    // addTree();
    // addTreeCost();

    //addNuclear();
    //addNuclearCost();

    calculateBorrow(year1)
    calculateTax(year1)

    //updateChart();

    reducer();

    windcarbon();
    hydroCarbon();
    NuclearCarbon();
    treeCarbon();

    setData('currentYear', year1);

    setData("index", { year: year1, cost2: outsideCosts2, radio: radio });


}