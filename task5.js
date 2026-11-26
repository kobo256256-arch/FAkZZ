function getAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

function getStatus(average) {
  if (average >= 4.5 && average <= 5) {
    return "Отличник";
  }

  if (average >= 3.5 && average < 4.5) {
    return "Хорошист";
  }

  if (average >= 3 && average < 3.5) {
    return "Удовлетворительно";
  }

  return "Не успевает";
}

const grades = [5, 4, 5, 3, 4];
const average = getAverage(grades);
const status = getStatus(average);

console.log("Средняя оценка:", average);
console.log("Статус:", status);

const otherGrades = [5, 5, 5, 5];
const otherAverage = getAverage(otherGrades);

console.log("Средняя оценка:", otherAverage);
console.log("Статус:", getStatus(otherAverage));
