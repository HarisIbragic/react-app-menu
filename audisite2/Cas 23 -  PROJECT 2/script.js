'use strict';

// scores
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
// names + players
const playerName0 = document.getElementById('name--0');
const playerName1 = document.getElementById('name--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// btns
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// dice
const diceEl = document.querySelector('.dice');
//Varijable
let scores, playing, activePlayer, win, currentScore;
let totalWin = [0, 0];

const init = function () {
  //Reset values:
  scores = 0;
  playing = true;
  activePlayer = 0;
  win = 0;
  currentScore = 0;
  //DOM resets:
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  //Hide dice:
  diceEl.classList.add('hidden');
  //Restart players names:
  playerName0.textContent = 'PLAYER 1';
  playerName1.textContent = 'PLAYER 2';
  //Remove winner class and focus on player 0:
  //Show buttons:
};
init();

const switchPlayer = function () {
  //Task 1
  //Resetovati curentScore na 0;
  currentScore = 0;
  //Task 2
  //Prikazati ga na UI:
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //Task 3:
  //Ako je igrac 0 da prebaci na 1 i suprotno:
  // SKRACENI OBLIK IF - ELSE (OVO MOZE DA BUDE U VREDNOSTI A GRANE NE MOGU)
  // OVO JE PRIMER ZA TERNARNI OPERATOR (IF NE MOZE A TERNARNI OPERATOR MOZE):
  activePlayer = activePlayer === 0 ? 1 : 0;
  // console.log(`POZDRAV SVIMA${curentScore === 0 ?"" :""}`)
  //Task 4: Da promenimo player--active clase npr: ako igrac 0 ima da mu seukloni i obratno. To uraditi za oba igraca.
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// ROLL btn
btnRoll.addEventListener('click', function () {
  // Ako je igra u toku:
  if (playing) {
    //Task 1
    //Prikazi sliku ('dice')
    diceEl.classList.remove('hidden');
    //Task 2
    //Napravi da nam daje random od 1-6 broja:
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // console.log(radnomDice);
    console.log(randomDice);
    //Task 3
    //Povezi ga da menja slike dinamicno sa random dice brojom.
    diceEl.src = `img/dice-${randomDice}.png`;
    //Task 4: AKO JE DOBRO
    //Ako dice nije 1 sabrati sve brojeve i prikazati ih u curentScore
    if (randomDice !== 1) {
      //1) Sabiraj broj jedan na drugi:
      currentScore = currentScore + randomDice;
      //2) Prikazi taj broj na UI:
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // KAD DOBIJEMO 1 (IZGUBILI SMO PRELAZI NA DRUGOG IGRACA)
    else {
      switchPlayer();
    }
  }
});

// HOLD btn
btnHold.addEventListener('click', function () {
  if (playing) {
    //Task 1:
    //Dodati trenutni rezultat u scores[] ( nasu bazu za poene )

    //Task 2:
    //Prikazati taj rezultat i na UI:

    //Task 3:
    //ako je rezultat >= 15 onda:
    if (scores[activePlayer] >= 15) {
      //1) prekini igru
      //2) ispisi ko je pobedio: 'WINNER!'
      //3)Uvecaj jednu pobedu za 1  i 4) Dodaj je na ukupnim pobedama 'winScores'
      //4) Prikazi tu pobedu gore u 'TOTAL WIN: 0'
      //5) Dodaj pobedniku klasu 'player--winner'
      //6) Sakrij roll,hold i sliku
    } else {
      // KAD DOBIJEMO 1 (IZGUBILI SMO PRELAZI NA DRUGOG IGRACA)
      swichPlayer();
    }
  }
});

// Task 4: NAPRAVITI NEW GAME BTN
