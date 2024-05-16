'use strict';
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // OD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
// ****444

// // // SPLICE
// // DO
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.splice(2));
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

// // CONCAT
// const letters = arr.concat(arr2);
// // console.log(letters);
// console.log([arr, arr2]);

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
// // forEach With Maps and Sets
// // Map
// // new - kaze nam da pravimo novi konstruktor
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
//   [22, 'Adem Ljajic'],
// ]);

// // 1- VREDNOST , 2- BROJAC(index/key) 3. NIZ
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set([
//   'USD',
//   'GBP',
//   'USD',
//   'EUR',
//   'EUR',
//   'RSD',
//   'ASD',
//   'RSD',
// ]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// // The map Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// // STARI NACIN - NE RADITI! :D
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// const brojac = movements.map(mov => mov * eurToUsd);
// console.log(brojac);

// const uplata = movements.map((mov, i, arr) => {
//   return `movement ${i + 1}: YOU ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
//     mov
//   )}`;
// });
// console.log(uplata);

// const konverter = movements.map(mov => mov * eurToUsd);
// console.log(konverter);

// const mojeUplate = movements.map(
//   (mov, i) =>
//     `movement ${i + 1}: YOU ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(mojeUplate);

// ///////////////////////////////////////
// The filter Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // STARI PRIMER - NE RADITI! :D
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // RADITE OVAKO:
// const withdrawals = movements.filter((mov, i) => mov < 0 );
// const withdrawalsVECE = movements.filter(mov => mov > 0);
// console.log(withdrawals);
// console.log(withdrawalsVECE);

// ///////////////////////////////////////
// The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 5500];
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// // STARI PRIMER NE RADITI
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   // 300 > 200    NECE VRATIT 100
//   if (acc > mov) return acc;

//   // 200
//   else return mov;
// }, movements[0]);
// console.log(max);

// // The Magic of Chaining Methods
// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 5500];
// console.log(movements);

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
