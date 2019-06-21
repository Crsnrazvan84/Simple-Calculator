var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('.button');
var equal = document.getElementById('equal');

buttons.forEach((button) => {
    button.addEventListener('click', function (){
        let number = this.getAttribute('data-num');
        screen.value += number;
    })
})

equal.addEventListener('click', function () {
    var result = eval(screen.value);
    screen.value = result;
})