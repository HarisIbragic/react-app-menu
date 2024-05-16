'use strict';

// // 1 NACIN: SVAKAD KORISTITE OVO ZA KLASE:
// document.querySelector('.message');
// console.log(document.querySelector('.message'));

// document.getElementsByClassName('guess')[0];

// // [guess,guess,....]
// console.log(document.getElementsByClassName('guess')[0]);

// // MENJANJE VREDNOSTI:
// document.querySelector('.message').textContent = ' TACAN BROJ!';

// // UZIMANJE VREDNOST:
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.between').textContent);

// document.getElementById('naslov').textContent =
//   'Deni nemoj da me udaras mnogo.hahah';

// document.querySelector('.number').textContent = '50';

// document.querySelector('.guess').value = 1;

// // SVE STO SE UNESE SA TASTATURE JE STRING: (DOKAZ)

// document.querySelector('.guess').value = 1;
// // PREVODIMO STRING U NUMBER: +
// // 1 NACIN ZA BROJ
// console.log(+document.querySelector('.guess').value);
// // // 2 NACIN ZA BROJ
// // console.log(Number(document.querySelector('.guess').value));

// const randomNum = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNum);

// document.querySelector('.number').textContent = randomNum;

// document.querySelector('.check').addEventListener('click', function () {
//   // console.log('RADI!');
//   // PISEMO NASU LOGIKU DUGMETA

//   const guess = +document.querySelector('.guess').value;
//   // console.log(guess); //0.

//   // guess: AKO IMA guess - true
//   // !guess: AKO NEMA guess - false
//   if (!guess) {
//     document.querySelector('.message').textContent =
//       'Nema broja! UNESITE BROJ od 1-20!';
//     //     console.log('PRAZNO, NEMA BROJ!'
//   }

//   if (guess === randomNum) {
//     document.querySelector('.message').textContent = 'TACAN BROJ!';
//   }

//   if (guess < randomNum) {
//     document.querySelector('.message').textContent = 'UNESITE VECI!';
//   }

//   if (guess > randomNum) {
//     document.querySelector('.message').textContent = 'UNESITE MANJI!';
//   }
// });

// const randomNum = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNum);

// document.querySelector('.number').textContent = randomNum;

// document.querySelector('.check').addEventListener('click', function () {
//   document.querySelector('.message').textContent = 'TACAN BROJ!';
//   const guess = +document.querySelector('.guess').value;
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'NEMA BROJA!';
//   }
// });

// let randomBroj = Math.trunc(Math.random() * 20) + 1;

// // document.querySelector('.number').textContent = randomBroj;

// let score = 20;

// // CHECK BTN
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = +document.querySelector('.guess').value;

//   if (score <= 1) {
//     document.querySelector('.message').textContent = 'GAME OVER';
//     document.querySelector('.score').textContent = 0;
//   } else if (!guess) {
//     document.querySelector('.message').textContent = 'NEMA BROJA';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess === randomBroj) {
//     document.querySelector('.message').textContent = 'TACAN BROJ';
//     document.querySelector('.number').textContent = randomBroj;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//   } else if (guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent = 'Uneiste broj od 1-20';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < randomBroj) {
//     document.querySelector('.message').textContent = 'UNESITE VECI BROJ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess > randomBroj) {
//     document.querySelector('.message').textContent = 'UNESITE MANJI BROJ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//   }
// });

// // AGAIN BTN

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   randomBroj = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = '?';

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.guess').value = 1;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// let randomBroj = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomBroj;
// let score = 20;

// const checkBtn = document.querySelector('.check');
// const againBtn = document.querySelector('.again');

// checkBtn.addEventListener('click', function () {
//   const guess = +document.querySelector('.guess').value;
//   if (score <= 1) {
//     document.querySelector('.message').textContent = 'GAME OVER';
//     document.querySelector('.score').textContent = 0;
//   } else if (!guess) {
//     document.querySelector('.message').textContent = 'NEMA BROJA';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent =
//       'UNESITE BROJEVE OD 1 DO 20';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess === randomBroj) {
//     document.querySelector('.message').textContent = 'TACAN BROJ';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//   } else if (guess < randomBroj) {
//     document.querySelector('.message').textContent = 'UNESITE VECI BROJ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess > randomBroj) {
//     document.querySelector('.message').textContent = 'UNEISTE MANJI BROJ';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// // again btn

// againBtn.addEventListener('click', function () {
//   score = 20;
//   randomBroj = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

/******************************************************************** */

// // REFAKTORISANJE KODA:

// // VARIJABLE:
// let randomBroj = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomBroj;
// let score = 20;
// let highScore = 0;

// //btns -dugmad varijable
// const checkBtn = document.querySelector('.check');
// const againBtn = document.querySelector('.again');

// // FUNKCIJE:
// const displayMessage = message => {
//   return (document.querySelector('.message').textContent = message);
// };

// const displayScore = score => {
//   return (document.querySelector('.score').textContent = score);
// };

// const changeColorBody = color => {
//   return (document.querySelector('body').style.backgroundColor = color);
// };

// // KOD/LOGIKA
// checkBtn.addEventListener('click', function () {
//   const guess = +document.querySelector('.guess').value;
//   if (score <= 1) {
//     displayMessage('GAME OVER');
//     changeColorBody('#c21111');
//     displayScore(0);
//   } else if (!guess) {
//     displayMessage('NEMA BROJA');
//     score--;
//     displayScore(score);
//   } else if (guess < 1 || guess > 20) {
//     displayMessage('UNESITE BROJEVE OD 1 DO 20');
//     score--;
//     displayScore(score);
//     document.querySelector('.guess').value = 1;
//   } else if (guess === randomBroj) {
//     displayMessage('TACAN BROJ');
//     changeColorBody('#60b347');
//     document.querySelector('.number').style.width = '30rem';

//     // console.log(score, highScore);

//     if (score > highScore) {
//       highScore = score;
//       // console.log(highScore);
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess < randomBroj) {
//     displayMessage('UNESITE VECI BROJ');
//     score--;
//     displayScore(score);
//   } else if (guess > randomBroj) {
//     displayMessage('UNEISTE MANJI BROJ');
//     score--;
//     displayScore(score);
//   }
// });

// // again btn
// againBtn.addEventListener('click', function () {
//   score = 20;
//   randomBroj = Math.trunc(Math.random() * 20) + 1;
//   displayMessage('Start guessing...');
//   displayScore(score);
//   document.querySelector('.number').textContent = '?';
//   changeColorBody('#222');
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').style.width = '15rem';
// });

// ********************************************************************

let randomBroj = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomBroj;
let score = 20;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const message = msg => {
  return (document.querySelector('.message').textContent = msg);
};
const displayScore = scr => {
  return (document.querySelector('.score').textContent = scr);
};
checkBtn.addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (score <= 1) {
    message('GAME OVER');
    displayScore(0);
  } else if (!guess) {
    message('NEMA BROJA');
    score--;
    displayScore(score);
  } else if (guess < 1 || guess > 20) {
    message('UNESITE BROJEVE OD 1 DO 20');
    score--;
    displayScore(score);
  } else if (guess === randomBroj) {
    message('TACAN BROJ');
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess < randomBroj) {
    message('UNESITE VECI BROJ');
    score--;
    displayScore(score);
  } else if (guess > randomBroj) {
    message('UNEISTE MANJI BROJ');
    score--;
    displayScore(score);
  }
});

// again btn

againBtn.addEventListener('click', function () {
  score = 20;
  randomBroj = Math.trunc(Math.random() * 20) + 1;
  message('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
