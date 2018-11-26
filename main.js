var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");



function multiplyBy() {
        num1 = firstNumber.value;
        num2 = secondNumber.value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
        num1 = firstNumber.value;
        num2 = secondNumber.value;
        document.getElementById("result").innerHTML = num1 / num2;
}

function sumBy() {
        num1 = firstNumber.value;
        num2 = secondNumber.value;
        document.getElementById("result").innerHTML = +num1 + +num2;
}

function diffBy() {
        num1 = firstNumber.value;
        num2 = secondNumber.value;
        document.getElementById("result").innerHTML = num1 - num2;
}