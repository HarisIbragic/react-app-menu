'use strict';

// // scores
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const curentScore0El = document.getElementById('current--0');
// const curentScore1El = document.getElementById('current--1');

// // names + players
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const playerName0El = document.getElementById('name--0');
// const playerName1El = document.getElementById('name--1');

// // btns
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // dice
// const diceEl = document.querySelector('.dice');

// //Varijable
// let scores, curentScore, activePlayer, playing, win;
// let winScores = [0, 0];

// const init = function () {
//Reset values:
// scores = [0, 0];
// curentScore = 0;
// activePlayer = 0;
// playing = true;
// win = 0;

//DOM resets:
// score0El.textContent = 0;
// score1El.textContent = 0;
// curentScore0El.textContent = 0;
// curentScore1El.textContent = 0;

//Hide dice:
// diceEl.classList.add('hidden');

//Restart players names:
// playerName0El.textContent = 'player 1';
// playerName1El.textContent = 'Player 2';

//Remove winner class and focus on player 0:
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');

//Show buttons:
//   btnRoll.classList.remove('hidden');
//   btnHold.classList.remove('hidden');
// };
// init();

// const switchPlayer = function () {
//   //Task 1
//   //Resetovati curentScore na 0;
//   curentScore = 0;

//   //Task 2
//   //Prikazati ga na UI:
//   document.getElementById(`current--${activePlayer}`).textContent = curentScore;

//   //Task 3:
//   //Ako je igrac 0 da prebaci na 1 i suprotno:

//   // SKRACENI OBLIK IF - ELSE (OVO MOZE DA BUDE U VREDNOSTI A GRANE NE MOGU)
//   // 0             1 === 1 TACNO!
//   activePlayer = activePlayer === 1 ? 0 : 1;
//   // OVO JE PRIMER ZA TERNARNI OPERATOR (IF NE MOZE A TERNARNI OPERATOR MOZE):
//   // console.log(`POZDRAV SVIMA${curentScore === 0 ?"" :""}`)

//   //Task 4: Da promenimo player--active clase npr: ako igrac 0 ima da mu seukloni i obratno. To uraditi za oba igraca.
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     //Task 1
//     //Prikazi sliku ('dice')
//     diceEl.classList.remove('hidden');

//     //Task 2
//     //Napravi da nam daje random od 1-6 broja:

//     const radnomDice = Math.trunc(Math.random() * 6) + 1;
//     // console.log(radnomDice);

//     //Task 3
//     //Povezi ga da menja slike dinamicno sa random dice brojom.
//     diceEl.src = `img/dice-${radnomDice}.png`;

//     //Task 4: AKO JE DOBRO
//     //Ako dice nije 1 sabrati sve brojeve i prikazati ih u curentScore
//     if (radnomDice !== 1) {
//       //1) Sabiraj broj jedan na drugi:
//       curentScore += radnomDice; // curentScore = curentScore + radnomDice
//       //2) Prikazi taj broj na UI:
//       document.getElementById(`current--${activePlayer}`).textContent =
//         curentScore;
//     }
//     // KAD DOBIJEMO 1 (IZGUBILI SMO PRELAZI NA DRUGOG IGRACA)
//     else {
//       switchPlayer();
//     }
//   }
// });

// const switchPlayer = function () {
//   curentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = curentScore;

//   activePlayer = activePlayer === 0 ? 1 : 0;

//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     diceEl.classList.remove('hidden');
//     const randomBroj = Math.trunc(Math.random() * 6) + 1;
//     // console.log(randomBroj);
//     diceEl.src = `img/dice-${randomBroj}.png`;

//     if (randomBroj !== 1) {
//       curentScore = curentScore + randomBroj;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         curentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// MOJA VEZBA

// players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerName0El = document.getElementById('name--0');
const playerName1El = document.getElementById('name--1');

// SCORES

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curentScore0El = document.getElementById('current--0');
const curentScore1El = document.getElementById('current--1');

// BTN-S

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// IMG DICE
const diceEl = document.querySelector('.dice');

// VARIJABLE

let scores, playing, activePlayer, curentScore, win;
let winScores = [0, 0];

const init = function () {
  // reset variables
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  curentScore = 0;
  win = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curentScore0El.textContent = 0;
  curentScore0El.textContent = 0;
  playerName0El.textContent = 'PLAYER 1';
  playerName1El.textContent = 'PLAYER 2';
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
};
init();
// SWITCH PLAYERS
const switchPlayer = function () {
  curentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = curentScore;

  activePlayer = activePlayer === 1 ? 0 : 1;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const radnomDice = Math.trunc(Math.random() * 6) + 1;
    // console.log(radnomDice);
    diceEl.src = `img/dice-${radnomDice}.png`;
    if (radnomDice !== 1) {
      curentScore = curentScore + radnomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});

// BTN HOLD
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 15) {
      playing = false;
      document.getElementById(`name--${activePlayer}`).textContent = 'WINNER!';
    }
    winScores[activePlayer] += ++win;
  }
});

// BTN NEW

btnNew.addEventListener('click', init);
