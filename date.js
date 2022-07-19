var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
var year = document.getElementById("year")
var reage = document.getElementById("reage")
var btn = document.getElementById("go")
var di = document.getElementById('di')
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
month.addEventListener("click", change)
function change() {
    document.getElementById('days').value=''
    if (month.value == 2) {
        days.innerHTML=''
        

        document.getElementById('days').value=''

        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            days.innerHTML=''
            for (i = 1; i <= 29; i++) {
                var option1 = document.createElement('option')
                var optionText = document.createTextNode(i);
                console.log(option1);
                
                var option2 = option1.appendChild(optionText)
                days.appendChild(option1)
                
                
            }
           
        }
        else {
            days.innerHTML=''
            for (i = 1; i <= 28; i++) {
                var option1 = document.createElement('Option')
                var optionText = document.createTextNode(i);
                console.log(option);
                 
                var option2 = option1.appendChild(optionText)
                days.appendChild(option1)
                 
            }
        }
       


    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        days.innerHTML=''
        for (i = 1; i <= 31; i++) {
            var option1 = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(option1);
             
            days.appendChild(option1)

            var option2 = option1.appendChild(optionText)
        }
    }
    else if (month.value == 00) {
    }
    else {
        days.innerHTML=''
        for (i = 1; i <= 30; i++) {
            var option1 = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(option1);
             
            var option2 = option1.appendChild(optionText)
            days.appendChild(option1)

             
        }
    }
}
