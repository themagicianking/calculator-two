function add (x, y) {
    return x + y;
};

function subtract (x, y) {
    return x - y;
};

function multiply (x, y) {
    return x * y;
};

function divide (x, y) {
    return x / y;
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

function addToDisplay (x) {
    const display = document.querySelector(".display");
    display.textContent = x;
}

let numbers = document.querySelectorAll("button.number");

for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener("click", storeDisplay);
    function storeDisplay () {
        displayNum = displayNum + numbers[i].textContent;
        addToDisplay(displayNum);
    };
};

const clear = document.getElementById("clear");
clear.addEventListener("click", allClear);

function allClear () {
    displayNum = "";
    addToDisplay(displayNum);
};

let operations = document.querySelectorAll("button.operations");

for (let i = 0; i < 4; i++) {
    operations[i].addEventListener("click", getSum);
    function getSum () {
        if (numOne == "none") {
            numOne = parseInt(displayNum);
            displayNum = "";
        }
        else {
            console.log(operator);
            numTwo = parseInt(displayNum);
            displayNum = operate(numOne, numTwo, operator);
            addToDisplay(displayNum);
            numOne = displayNum;
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