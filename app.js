//DOM elements
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.screen-input');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelectorAll('.reset');
const delBtn = document.querySelector('.del');
const percentBtn = document.querySelector('.percent');

//check for screen input

const checkScreen = () => {
    const checkScreenInput = () => {
        () => {
            if (screen.value === "NaN" || screen.value === undefined) {
                screen.value = "ERROR";
            }
        }
    }

    document.addEventListener('keyup', checkScreenInput());
}


//add values to screen
const addToScreen = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const number = this.getAttribute('data-num');
            screen.value += number;
        })
    });

    document.addEventListener('keypress', (event) => {
        const x = event.keyCode;
        const y = String.fromCharCode(x);
        const regex = new RegExp(/[0-9, -, +, /, *, %]/, 'g');
        if (y.match(regex)) {
            // animate numbers
            document.getElementById(y).style.animation = "pushBtn 0.2s ease";
            // add value to screen
            screen.value += y;
        };
        buttons.forEach(btn => btn.addEventListener('animationend', removeTransition));
    });
}


//remove animations
const removeTransition = (e) => {
    e.target.style.animation = "";
}

//evaluate screen value
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
        btn.addEventListener('click', () => { screen.value = "" });
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
        str = str.substring(0, str.length - 1);
        screen.value = str;
    }

    delBtn.addEventListener('click', () => {
        backspace();
    });

    document.addEventListener('keydown', (e) => {
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