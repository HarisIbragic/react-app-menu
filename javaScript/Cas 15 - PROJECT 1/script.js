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

const randomBroj = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = randomBroj;

let score = 20;
let highscore = Math.trunc(Math.random() * 20) + 1;
// CHECK BTN
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  if (score <= 1) {
    document.querySelector('.message').textContent = 'GAME OVER';
    document.querySelector('.score').textContent = 0;
  } else if (!guess) {
    document.querySelector('.message').textContent = 'NEMA BROJA';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === randomBroj) {
    document.querySelector('.message').textContent = 'TACAN BROJ';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = randomBroj;
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Uneiste broj od 1-20';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < randomBroj) {
    document.querySelector('.message').textContent = 'UNESITE VECI BROJ';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > randomBroj) {
    document.querySelector('.message').textContent = 'UNESITE MANJI BROJ';
    score--;
    document.querySelector('.score').textContent = score;
    // } else if (score < highscore) {
    //   document.querySelector('.highscore').textContent = highscore;
  } else {
  }
});

// AGAIN BTN

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const randomBroj = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = 1;
});
