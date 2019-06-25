//DOM elements
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.screen-input');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelectorAll('.reset');
const delBtn = document.querySelector('.del');
const percentBtn = document.querySelector('.percent');

//add values to screen
buttons.forEach((button) => {
    button.addEventListener('click', function (){
        let number = this.getAttribute('data-num');
        screen.value += number;
    })
})

//get value to screen
equalBtn.addEventListener('click', () => {
    let result = eval(screen.value);
    screen.value = result;
})

screen.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        screen.value = eval(screen.value);
  }
});

//reset values
resetBtn.forEach((btn) => {
    btn.addEventListener('click', () => {screen.value = ""});
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        screen.value = "";
  }
});

//backspace
const backspace = () => {
    let a = screen.value;
    a = (a-(a%10))/10;
    if(a == 0) {
        a = "";
    }
    screen.value = a;
}

delBtn.addEventListener('click', () => {
    backspace();
});

document.addEventListener('keydown',(e) => {
    if (e.keyCode === 8) {
        backspace();
  }
});