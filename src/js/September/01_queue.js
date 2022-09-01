// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}

function fn(buyers, cases) {
  const obj = {};

  for (let i = 1; i <= cases; i++) {
    obj[i] = 0;
  }
  buyers.forEach(buyer => {
    const value = Object.values(obj);
    const idx = value.indexOf(Math.min(...value));
    obj[idx + 1] += buyer;
  });
  return obj;

  buyers.forEach(buyer =>
    (obj[Object.values(obj).indexOf(Math.min(...Object.values(obj))) + 1] += buyer)
  );
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2))
console.log(fn([12, 3, 5, 6, 2, 15, 7], 3))


