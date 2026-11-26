const sum = function (a, b) {
  return a + b;
};
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Деление на ноль невозможно";
  }
  return a / b;
}

console.log(sum(10, 5));
console.log(sum(7, 3));
console.log(subtract(10, 5));
console.log(subtract(7, 3));
console.log(multiply(10, 5));
console.log(multiply(7, 3));
console.log(divide(10, 5));
console.log(divide(7, 2));
console.log(divide(10, 0));
