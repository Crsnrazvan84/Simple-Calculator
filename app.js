//DOM elements
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.screen-input');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelectorAll('.reset');
const delBtn = document.querySelector('.del');
const percentBtn = document.querySelector('.percent');

//check for screen input
const checkScreen = () => {
    document.addEventListener('keyup', () => {
        if(screen.value === "NaN" || screen.value === "undefined" ){
            screen.value = "ERROR";
        }
     })
}


//add values to screen
const addToScreen = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', function (){
            let number = this.getAttribute('data-num');
            screen.value += number;
        })
    });
    
    document.addEventListener('keypress', function myFunction(event) {
        var x = event.keyCode;
        var y = String.fromCharCode(x); 
        screen.value += y;
       
    });
}

//get value to screen
const evalScreen = () => {
    equalBtn.addEventListener('click', () => {
        let result = eval(screen.value);
        screen.value = result;
    })
    
    document.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            screen.value = eval(screen.value);
      }
    });
}


//reset values
const resetScreen = () => {
    resetBtn.forEach((btn) => {
        btn.addEventListener('click', () => {screen.value = ""});
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            screen.value = "";
      }
    });
}

//backspace
const backspaceScreen = () => {
    const backspace = () => {
        let str = screen.value;
        str = str.substring(0, str.length -1);
        screen.value = str;
    }
    
    delBtn.addEventListener('click', () => {
        backspace();
    });
    
    document.addEventListener('keydown',(e) => {
        if (e.keyCode === 8) {
            backspace();
      }
    });
}

checkScreen();
addToScreen();
evalScreen();
resetScreen();
backspaceScreen();