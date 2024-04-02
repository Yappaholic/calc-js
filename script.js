
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
console.log(operate("3 / 5"))
