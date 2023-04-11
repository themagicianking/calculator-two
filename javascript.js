function add (x, y) {
    if ((x + y) > 9999999999) {
        return "Error: overflow";
    }
    else {
        return Math.round((x + y) * 10) / 10;
    }
};

function subtract (x, y) {
    return Math.round((x - y) * 10) / 10;
};

function multiply (x, y) {
    if ((x * y) > 9999999999) {
        return "Error: overflow";
    }
    else {
        return Math.round((x * y) * 10) / 10;
    };
};

function divide (x, y) {
    if ((x / y ) == Infinity || (x / y) == -Infinity) {
        return "Nice try."
    }
    else {
        return Math.round((x / y) * 10) / 10;
    };
};

let numOne = "none";
let numTwo = "none";
let operator = "none";

function operate(numOne, numTwo, operator) {
    if (operator == "add") {
        return add(numOne, numTwo);
    }
    else if (operator == "subtract") {
        return subtract(numOne, numTwo);
    }
    else if (operator == "multiply") {
        return multiply(numOne, numTwo);
    }
    else {
        return divide(numOne, numTwo);
    }
};

let displayNum = "";
const display = document.querySelector(".display");

function addToDisplay (x) {
    display.textContent = x;
}

let numbers = document.querySelectorAll("button.number");

for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener("click", storeDisplay);
    function storeDisplay () {
        if ((numbers[i].textContent + displayNum).length < 10) {
            displayNum = displayNum + numbers[i].textContent;
            addToDisplay(displayNum);
        };
    };
};

const clear = document.getElementById("clear");
clear.addEventListener("click", allClear);

function allClear () {
    displayNum = "";
    numOne = "none";
    numTwo = "none";
    operator = "none";
    addToDisplay(displayNum);
};

const equals = document.getElementById("equals");
equals.addEventListener("click", evaluate);

function evaluate () {
    if (numOne != "none") {
    numTwo = parseInt(displayNum);
    displayNum = operate(numOne, numTwo, operator);
    addToDisplay(displayNum);
    numOne = "none";
    numTwo = "none";
    displayNum = "";
    };
};

let operations = document.querySelectorAll("button.operations");

for (let i = 0; i < 4; i++) {
    operations[i].addEventListener("click", getSum);
    function getSum () {
        if (numOne == "none") {
            numOne = parseInt(display.textContent);
            console.log(display.textContent);
            displayNum = "";
        }
        else if (numTwo == "none") {
            numTwo = parseInt(displayNum);
            displayNum = operate(numOne, numTwo, operator);
            addToDisplay(displayNum);
            numOne = parseInt(displayNum);
            numTwo = "none";
            displayNum = "";
            operator = "none";
        };
        if (operations[i].textContent == "+") {
            operator = "add";
        }
        else if (operations[i].textContent == "-") {
            operator = "subtract";
        }
        else if (operations[i].textContent == "x") {
            operator = "multiply";
        }
        else {
            operator = "divide";
        };
    };
};