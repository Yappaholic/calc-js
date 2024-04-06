const screen = document.querySelector(".screen");
const text = document.createElement("p")
text.classList.toggle("text")
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
let regex = /\d+[*+-\/]\d+([*+-\/])/g;
function textEdit(number) {
  text.textContent += number;
  screen.appendChild(text);
};
function easyEval(arr) {
  let operateReg = /(\d+)([*+-\/])(\d+)/;
  let easy = arr.join("");
  easy = easy.match(operateReg);
  firstNumber = (operate(easy[1], easy[2], easy[3]));
  text.textContent = firstNumber;
};
function createEval(arr) {
  let operateReg = /(\d+)([*+-\/])(\d+)/;
  let evl = arr.join("");
  let endResult
  if (regex.test(evl) === true) {
    let nextOperator = evl.match(/.$/)
    evl = evl.replace(/.$/, "");
    let result = evl.match(operateReg);
    firstNumber = operate(result[1], result[2], result[3]);
    text.textContent = firstNumber+nextOperator;
    res = [firstNumber, nextOperator]
  };
};
function numbersEvent(i) {
  res.push(i);
  textEdit(i);
  createEval(res);
};
function operatorsEvent(i) {
  res.push(i);
  textEdit(i);
  createEval(res);
};
function clear() {
  res.length = 0
  text.textContent = ""
};
for (let i = 0; i < 10; i++) {
  numbers[i].addEventListener("click", () => numbersEvent(i))};
for (let i = 0; i < 4; i++) {
  let operator = operators[i].textContent
  operators[i].addEventListener("click", () => operatorsEvent(operator))};
buttonClear.addEventListener("click", () => clear());
buttonEvaluate.addEventListener("click", () => easyEval(res));
function operate(...args) {
  var firstNumber
  let operator
  let secondNumber
  [firstNumber, operator, secondNumber] = args
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
