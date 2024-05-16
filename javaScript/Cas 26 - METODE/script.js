'use strict';
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // // SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // OD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// // ****444

// // // SPLICE
// // DO
// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // console.log(arr.splice(2));
// arr.splice(2);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
// console.log(arr.reverse());

// // // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // // JOIN
// console.log(letters.join(' - '));

// // ///////////////////////////////////////
// // The new at Method
// const arr = [23, 11, 64, 31];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('asmir'.at(0)); //  [a,s,m,i,r]
// console.log('asmir'.at(-1)); //  [a,s,m,i,r]

// ///////////////////////////////////////
// ///////////////////////////////////////
// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // STARI NACIN:
// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// ///////////////////////////////////////
// forEach With Maps and Sets
// Map
// new - kaze nam da pravimo novi konstruktor
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  [22, 'Adem Ljajic'],
]);

// 1- VREDNOST , 2- BROJAC(index/key) 3. NIZ
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set([
  'USD',
  'GBP',
  'USD',
  'EUR',
  'EUR',
  'RSD',
  'ASD',
  'RSD',
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
