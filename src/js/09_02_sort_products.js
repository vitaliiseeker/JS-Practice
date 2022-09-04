const products = [{
  id: 'sku1',
  qty: 1,
}, {
  id: 'sku2',
  qty: 2,
}, {
  id: 'sku3',
  qty: 3,
}, {
  id: 'sku1',
  qty: 6,
}, {
  id: 'sku1',
  qty: 8,
}, {
  id: 'sku2',
  qty: 19,
}, {
  id: 'sku4',
  qty: 1,
}]

function association(array) {

  // for (let i = 0; i < arr.length - 1; i += 1) {
  //   for (let j = i + 1; j < arr.length - 1; j += 1) {
  //     if (arr[i].id === arr[j].id) {
  //       arr[i].qty += arr[j].qty;
  //       arr.splice(j, 1);
  //       j -= 1;
  //     }
  //   }
  // }

  // const a1 = [...products];
  // const a2 = [...products];

  // console.log(a1);
  // console.log(a1.splice(2, 0));
  // console.log(a1);

  // console.log(a1);
  // console.log(a2);
  // const a22 = a2.splice(-1, 0);
  // console.log(a2);
  // console.log(a22);

  // console.log(a22);
  // console.log(a22[0].id);
  // console.log(a22[0].qty);

  array.forEach(function (el1, idx1, arr1) {
    console.log(idx1);
    console.log(array[idx1].qty);

    array[idx1].qty += array.splice(arr1.slice(idx1 + 1)
      .reduce((accQty, el2, idx2, arr2) => {
        if (el2.id === el1.id) {
          console.log(accQty);
          console.log(el2.qty);
          console.log(array[idx1].qty);
          // console.log(ael2[idx2].qty);
          array[idx1].qty += el2.qty;
          console.log(array[idx1].qty);

          // console.log(array);
          array.splice(idx2 - idx1 + 1, 1);
          // console.log(array);

        }
        return accQty;
      }, array[idx1].qty));

    // .arr1.slice(idx1 + 1).findIndex((el3) =>
    //   el3.id === el1.id) === -1 ? 0 : 1)[0]?.qty || 0;
    // array[idx1].qty += array.splice(arr1.slice(idx1 + 1).findIndex((el2) =>
    //   el2.id === el1.id) + 1, arr1.slice(idx1 + 1).findIndex((el3) =>
    //     el3.id === el1.id) === -1 ? 0 : 1)[0]?.qty || 0;

  });

  // for (let i = arr.length - 1; i > 0; i -= 1) {
  //   for (let j = i - 1; j >= 0; j -= 1) {
  //     if (arr[j].id === arr[i].id) {
  //       arr[j].qty += arr[i].qty;
  //       arr.pop();
  //     }
  //   }
  // }
  return array;
}

console.log(products);
console.log(association(products));

//Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
//(Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [{
//   id: 'sku1',
//   qty: 15,
// }, {
//   id: 'sku2',
//   qty: 21,
// }, {
//   id: 'sku3',
//   qty: 3,
// }, {
//   id: 'sku4',
//   qty: 1,
// }]

