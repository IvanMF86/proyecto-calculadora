let screen = document.getElementById("screen");
let currentInput = "";

function appendToScreen(value) {
    currentInput += value;
    screen.innerText = currentInput;
}

function clearScreen() {
    currentInput = "";
    screen.innerText = "0";
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        screen.innerText = currentInput;
    } catch (error) {
        screen.innerText = "Error";
        currentInput = "";
    }
}
