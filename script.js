const number1 = document.querySelector("#one");
const number2 = document.querySelector("#two");
const number3 = document.querySelector("#three");
const number4 = document.querySelector("#four");
const number5 = document.querySelector("#five");
const number6 = document.querySelector("#six");
const number7 = document.querySelector("#seven");
const number8 = document.querySelector("#eight");
const number9 = document.querySelector("#nine");
const number0 = document.querySelector("#zero");
const buttonAdd = document.querySelector("#add");
const buttonSubstract = document.querySelector("#substract");
const buttonMultiply = document.querySelector("#multiply");
const buttonDivide = document.querySelector("#divide");
const buttonEvaluate = document.querySelector("#equal");
const buttonClear = document.querySelector("#c");
let numbers = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9]
let operators = [buttonDivide, buttonMultiply, buttonAdd, buttonSubstract]
let res = []
for (let i = 0; i < 10; i++) {
  numbers[i].addEventListener("click", () => res.push(i) && console.log(res))
};
for (let i = 0; i < 4; i++) {
  operators[i].addEventListener("click", () =>  res.push(operators[i].textContent) && console.log(res))
};
buttonClear.addEventListener("click", () => res.length = 0 && console.log(res));
buttonEvaluate.addEventListener("click", () => console.log(res.join("")))
function operate(string) {
  let firstNumber
  let operator
  let secondNumber
  [firstNumber, operator, secondNumber] = string.split(" ")
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  if (operator == "+") {
    return add(firstNumber, secondNumber)
  } else if (operator == "-") {
    return substract(firstNumber, secondNumber)
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber)
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber)
  };
};
function add(x, y) {
  return x + y
};
function substract(x, y) {
  return x - y
};
function multiply(x, y) {
  return x * y
};
function divide(x, y) {
  return x / y
};
