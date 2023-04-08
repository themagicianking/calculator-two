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

let numOne;
let numTwo;
let operator;

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

const one = document.getElementById("one");
one.addEventListener("click", addOne);
function addOne() {
    displayNum = displayNum + "1";
    addToDisplay(displayNum);
};

const two = document.getElementById("two");
two.addEventListener("click", addTwo);
function addTwo() {
    displayNum = displayNum + "2";
    addToDisplay(displayNum);
};

const three = document.getElementById("three");
three.addEventListener("click", addThree);
function addThree() {
    displayNum = displayNum + "3";
    addToDisplay(displayNum);
};

const four = document.getElementById("four");
four.addEventListener("click", addFour);
function addFour() {
    displayNum = displayNum + "4";
    addToDisplay(displayNum);
};

const five = document.getElementById("five");
five.addEventListener("click", addFive);
function addFive() {
    displayNum = displayNum + "5";
    addToDisplay(displayNum);
};

const six = document.getElementById("six");
six.addEventListener("click", addSix);
function addSix() {
    displayNum = displayNum + "6";
    addToDisplay(displayNum);
};

const seven = document.getElementById("seven");
seven.addEventListener("click", addSeven);
function addSeven() {
    displayNum = displayNum + "7";
    addToDisplay(displayNum);
};

const eight = document.getElementById("eight");
eight.addEventListener("click", addEight);
function addEight() {
    displayNum = displayNum + "8";
    addToDisplay(displayNum);
};

const nine = document.getElementById("nine");
nine.addEventListener("click", addNine);
function addNine() {
    displayNum = displayNum + "9";
    addToDisplay(displayNum);
};

const zero = document.getElementById("zero");
zero.addEventListener("click", addZero);
function addZero() {
    displayNum = displayNum + "0";
    addToDisplay(displayNum);
};