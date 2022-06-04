//  let displayVal = '';
//  var buttonText;
let display = document.getElementById('display');
 buttons = document.querySelectorAll('button');

let displayVal = '';

for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        if(buttonText=='X'){
            buttonText = '*';
            displayVal += buttonText;
            display.value = displayVal;
        }

        else if(buttonText=='AC'){
            displayVal = '';
            display.value = displayVal;
        }

        else if(buttonText=='='){
            display.value = eval(displayVal);
        }

        else{
            displayVal +=buttonText;
            display.value = displayVal;
        }
    })

    
}