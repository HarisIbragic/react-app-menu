'use strict';

// //scores
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const curentScore0El = document.getElementById('current--0');
// const curentScore1El = document.getElementById('current--1');

// //players
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const playerName0El = document.getElementById('name--0');
// const playerName1El = document.getElementById('name--1');

// // btns
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //img dice
// const dice = document.querySelector('.dice');

// let scores, curentScore, activePlayer, playing, win;
// let winScores = [0, 0];

// const init = function () {
//   // Reset Values:
//   scores = [0, 0];
//   curentScore = 0;
//   activePlayer = 0;
//   playing = true;
//   win = 0;

//   // DOM RESET:
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   curentScore0El.textContent = 0;
//   curentScore1El.textContent = 0;

//   // Hide dice:
//   dice.classList.add('hidden');

//   // reset Name:
//   playerName0El.textContent = 'Hari';
//   playerName1El.textContent = 'Deni';
// };

// init();

// scores
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curentScore0El = document.getElementById('current--0');
const curentScore1El = document.getElementById('current--1');

// names + players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerName0El = document.getElementById('name--0');
const playerName1El = document.getElementById('name--1');

// btns
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// dice

const dice = document.querySelector('.dice');

let scores, curentScore, playing, activePlayer, win;
let winScores = [0, 0];

const init = function () {
  scores = [0, 0];
  curentScore = 0;
  playing = true;
  activePlayer = 0;
  win = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curentScore0El.textContent = 0;
  curentScore0El.textContent = 0;

  // names:
  playerName0El.textContent = 'PLAYER 1';
  playerName1El.textContent = 'PLAYER 2';

  //Remove winner class and focus on player 0:
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  dice.classList.add('hidden');

  // PRIKAZATI DUGMAD:
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
};

init();

// const switchPlayer = function () {
//   //Task 1
//   //Resetovati curentScore na 0;
//   curentScore = 0;

//   //Task 2
//   //Prikazati ga na UI:
//   document.getElementById(`current--${activePlayer}`).textContent = curentScore;

//   //Task 3: LOGIKA
//   //Ako je igrac 0 da prebaci na 1 i suprotno:

//   activePlayer = activePlayer === 0 ? 1 : 0;

//   // if (activePlayer===0) {
//   //   return 1;
//   // }
//   // else{
//   //   return 0
//   // }

//   //Task 4: Da promenimo player--active clase npr: ako igrac 0 ima da mu seukloni i obratno. To uraditi za oba igraca.

//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. PRIKAZI DICE(KOCKICU)
//     dice.classList.remove('hidden');

//     //Task 2
//     //Napravi da nam daje random od 1-6 broja:   2
//     // console.log(Math.trunc(Math.random() * 6) + 1);

//     const diceRandom = Math.trunc(Math.random() * 6) + 1;
//     console.log(diceRandom);

//     //Task 3
//     //Povezi ga da menja slike dinamicno sa random dice brojom.
//     dice.src = `img/dice-${diceRandom}.png`;

//     //Task 4
//     //Ako dice nije 1 sabrati sve brojeve i prikazati ih u curentScore
//     if (diceRandom !== 1) {
//       //1) Sabiraj broj jedan na drugi:
//       //  14            12            2
//       curentScore += diceRandom; // curentScore = curentScore + diceRandom

//       //2) Prikazi taj broj na UI:
//       document.getElementById(`current--${activePlayer}`).textContent =
//         curentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// VEZBA:
const switchPlayer = function () {
  curentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = curentScore;

  activePlayer = activePlayer === 1 ? 0 : 1;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //Task 1
    //Prikazi sliku ('dice')
    dice.classList.remove('hidden');

    //Task 2
    //Napravi da nam daje random od 1-6 broja:

    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRandom);

    //Task 3
    //Povezi ga da menja slike dinamicno sa random dice brojom.
    dice.src = `img/dice-${diceRandom}.png`;

    //Task 4
    //Ako dice nije 1 sabrati sve brojeve i prikazati ih u curentScore

    if (diceRandom !== 1) {
      //1) Sabiraj broj jedan na drugi:
      curentScore = curentScore + diceRandom;
      //2) Prikazi taj broj na UI:
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      //  else: // TASK 5: AKO NIJE NAPRAVITI switchPlayer f-ciju iznad 'btnRoll'
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //Task 1:
    //Dodati trenutni rezultat u scores[] ( nasu bazu za poene )
    // scores[activePlayer] = scores[activePlayer] + curenScore
    scores[activePlayer] += curentScore;
    //Task 2:
    //Prikazati taj rezultat i na UI:
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Task 3:
    //ako je rezultat >= 15 onda:
    if (scores[activePlayer] >= 15) {
      //1) POBEDA UGASI IGRANJE:
      playing = false;

      //2) ispisi ko je pobedio: 'WINNER!'
      document.getElementById(`name--${activePlayer}`).textContent = 'WINNER!';

      //3)Uvecaj jednu pobedu za 1  i 4) Dodaj je na ukupnim pobedama 'winScores'
      winScores[activePlayer] += ++win;

      //4)Uvecaj jednu pobedu za 1  i 4) Dodaj je na ukupnim pobedama 'winScores'
      document.getElementById(
        `win--${activePlayer}`
      ).textContent = `TOTAL WIN: ${winScores[activePlayer]}`;

      //5) Dodaj pobedniku klasu 'player--winner'

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //6) Sakrij roll,hold i sliku
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
      dice.classList.add('hidden');

      // 7) RESETUJ CURRENT:
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

// init()

btnNew.addEventListener('click', init);
