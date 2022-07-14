var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
var year = document.getElementById("year")
year.addEventListener('click',changeyr)
function changeyr(){
    yr=year.value
    console.log(yr)
    document.getElementById('month').value=''
    document.getElementById('days').value=''
     
   
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