var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
month.addEventListener("click", change)
function change() {
    if (month.value == 2) {
        console.log("hello");

        for (i = 1; i <= 28; i++) {
            var Option1 = document.createElement('Option')
            var optionText = document.createTextNode(i);
            console.log(Option1);
           
            var Option2 = Option1.appendChild(optionText)
            days.appendChild(Option1)
            
        }


    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        for (i = 1; i <= 31; i++) {
            var Option1 = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(Option1);
            
            days.appendChild(Option1)

            var Option2 = Option1.appendChild(optionText)
        }
    }
    else if (month.value == 00) {
    }
    else {
        for (i = 1; i <= 30; i++) {
            var Option1 = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(Option1);
           
            var Option2= Option1.appendChild(optionText)
            days.appendChild(Option1)

            
        }
    }
}