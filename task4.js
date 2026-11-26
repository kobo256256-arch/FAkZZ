const calculateDiscount = function (price, discount) {
  if (discount < 0 || discount > 100) {
    return "Некорректная скидка";
  }

  return price - (price * discount) / 100;
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(5000, 20));
console.log(calculateDiscount(2000, 50));
console.log(calculateDiscount(1000, 0));
console.log(calculateDiscount(1000, 100));
console.log(calculateDiscount(1000, 110));
