var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
var year = document.getElementById("year")
var reage = document.getElementById("reage")
var btn = document.getElementById("go")
var di = document.getElementById('di')
var diyears = document.getElementById('diyears')
var dimonths = document.getElementById('dimonths')
var didays = document.getElementById('didays')

var body

console.log(reage.value)
//........................................
year.addEventListener('click', changeyr)
function changeyr() {
    yr = year.value
    console.log(yr)
    // console.log(typeof yr)
    document.getElementById('month').value = ''
    document.getElementById('days').value = ''
}



//button gooo..........................................

btn.addEventListener('click', go)
function go() {
    di.innerHTML = '';
    //age yr calculating............................
    var reyr = new Date()
    // console.log(reyr)
    var curyr = (reyr.getUTCFullYear());
    console.log(curyr)
    // console.log(typeof curyr)
    var curage = (curyr - yr)
    console.log(curage)
    var furage = (reage.value - curage)
    console.log(furage)
    //........................................... 



    //age month calculating.................
    var curmon = (reyr.getUTCMonth());
    var balanceagemonth = Math.abs((12) - (month.value))
    console.log(curmon)
    console.log(balanceagemonth)
    // console.log(curmon+1)
    //......................................


    //age days.......................................
    var curday = (reyr.getUTCDate());
    if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        var balanceageday = Math.abs((31) - (days.value))
        // console.log(curmon)
        console.log(balanceageday)
    }
    else if (month.value == 2) {
        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            var balanceageday = Math.abs((29) - (days.value))
            // console.log(curmon)
            console.log(balanceageday)
        }
        else {
            var balanceageday = Math.abs((28) - (days.value))
            // console.log(curmon)
            console.log(balanceageday)
        }
    }
    else {
        var balanceageday = Math.abs((30) - (days.value))
        // console.log(curmon)
        console.log(balanceageday)
    }




    //...............................................
    //creating button
    for (i = 1; i <= furage; i++) {
        // di.remove();
        //di.removeChild(button)

        console.log(i)
        var button = document.createElement('button')
        button.innerText = 'Y'
        diyears.innerHTML = 'Years:'+furage
        button.setAttribute('style', 'background-color: red');
        // console.log(button)
        di.appendChild(button)
    }
    for (i = 1; i <= balanceagemonth; i++) {
        console.log(i)
        var button = document.createElement('button')
        button.innerText = 'M'
        dimonths.innerHTML = 'Months:'+balanceagemonth

        button.setAttribute('style', 'background-color: green');
        // console.log(button)
        di.appendChild(button)
    }
    for (i = 1; i <= balanceageday; i++) {
        console.log(i)
        var button = document.createElement('button')
        button.innerText = 'D'
        didays.innerHTML = 'Days:'+balanceageday
        button.setAttribute('style', 'background-color: blue');
        // console.log(button)
        di.appendChild(button)
    }
    //................
}


month.addEventListener("click", change)
function change() {
    document.getElementById('days').value = ''
    if (month.value == 2) {
        days.innerHTML = ''
        document.getElementById('days').value = ''
        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            days.innerHTML = ''
            for (i = 1; i <= 29; i++) {
                addOption();
            }
        }
        else {
            days.innerHTML = ''
            for (i = 1; i <= 28; i++) {
                addOption();
            }
        }
    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        days.innerHTML = ''
        for (i = 1; i <= 31; i++) {
            addOption();
        }
    }
    else if (month.value == 00) {
    }
    else {
        days.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            addOption();
        }
    }
}
//add option..............................
function addOption() {
    var op = document.createElement('Option')
    const optionText = document.createTextNode(i);
    console.log(op);
    var oop = op.appendChild(optionText)
    days.appendChild(op)
}
