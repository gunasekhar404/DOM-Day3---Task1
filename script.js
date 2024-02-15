let display = document.getElementById('result');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function setOperation(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

document.addEventListener('keydown', function (event) {
    if (!isNaN(event.key)) {
        appendNumber(event.key);
    } else {   
        alert('Only numbers are allowed');
    }
});
