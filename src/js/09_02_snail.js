function calculationSnailSurvival(depth) {

  let way = 0;
  let day = 0;
  moveUp = 7;
  moveDown = 2;

  while (way < depth) {
    way += moveUp;
    day += 1;
    if (way < depth) way -= moveDown;
  }
  return day;
}

console.log(calculationSnailSurvival(42));
console.log(calculationSnailSurvival(17));
console.log(calculationSnailSurvival(18));


// потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

