function checkAge(age) {
  if (age < 0) {
    return "Непройдешь нет 18";
  }

  if (age < 18) {
    return "Отказано";
  }

  return "Ну ладно, проходи";
}

console.log(checkAge(15));
console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(-5));
