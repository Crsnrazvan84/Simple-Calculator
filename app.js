const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.screen-input');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.reset');
const delBtn = document.querySelector('.del');


//add values to screen
buttons.forEach((button) => {
    button.addEventListener('click', function (){
        let number = this.getAttribute('data-num');
        screen.value += number;
    })
})

//get value to screen
equalBtn.addEventListener('click', function () {
    var result = eval(screen.value);
    screen.value = result;
})

//reset values
resetBtn.addEventListener('click', () => {screen.value = ""});

//backspace
delBtn.addEventListener('click', () => {
    var a = screen.value;
    a = (a-(a%10))/10;
    screen.value = a;
});
