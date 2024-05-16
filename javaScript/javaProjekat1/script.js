'use strict';

// scores
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
// names + players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const namePlayer0El = document.getElementById('name--0');
const namePlayer1El = document.getElementById('name--1');
// btns
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// dice
const diceEl = document.querySelector('.dice');
//Varijable
let activePlayer, playing, currentScore, win, scores;
let winScores = [0, 0];

const init = function () {
  //Reset values:
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  win = 0;
  activePlayer = 0;
  //DOM resets:
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  //Hide dice:
  diceEl.classList.add('hidden');
  //Restart players names:
  namePlayer0El.textContent = 'Player 1';
  namePlayer1El.textContent = 'Player 2';
  //Remove winner class and focus on player 0:
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  //Show buttons:
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
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
  activePlayer = activePlayer === 0 ? 1 : 0;
  // SKRACENI OBLIK IF - ELSE (OVO MOZE DA BUDE U VREDNOSTI A GRANE NE MOGU)
  // OVO JE PRIMER ZA TERNARNI OPERATOR (IF NE MOZE A TERNARNI OPERATOR MOZE):
  // console.log(`POZDRAV SVIMA${curentScore === 0 ?"" :""}`)

  //Task 4: Da promenimo player--active clase npr: ako igrac 0 ima da mu seukloni i obratno. To uraditi za oba igraca.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ROLL btn
btnRoll.addEventListener('click', function () {
  // Ako je igra u toku:
  //Task 1
  if (playing) {
    //Prikazi sliku ('dice')
    diceEl.classList.remove('hidden');
    //Task 2
    //Napravi da nam daje random od 1-6 broja:
    const randomDice = Math.trunc(Math.random() * 6) + 1;
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
  //Task 1:
  //Dodati trenutni rezultat u scores[] ( nasu bazu za poene )
  if (playing) {
    scores[activePlayer] += currentScore;
    //Task 2:
    //Prikazati taj rezultat i na UI:
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Task 3:
    //ako je rezultat >= 15 onda:
    if (scores[activePlayer] >= 15) {
      //1) prekini igru
      playing = false;
      //2) ispisi ko je pobedio: 'WINNER!'
      document.getElementById(`name--${activePlayer}`).textContent = 'WINNER';
      //3)Uvecaj jednu pobedu za 1  i  Dodaj je na ukupnim pobedama 'winScores'
      winScores[activePlayer] += ++win;
      //4) Prikazi tu pobedu gore u 'TOTAL WIN: 0'
      document.getElementById(
        `win--${activePlayer}`
      ).textContent = `WIN SCORE:${winScores[activePlayer]}`;
      //5) Dodaj pobedniku klasu 'player--winner'
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //6) Sakrij roll,hold i sliku
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
    }
    // KAD DOBIJEMO 1 (IZGUBILI SMO PRELAZI NA DRUGOG IGRACA)
    else {
      switchPlayer();
    }
  }
});

// Task 4: NAPRAVITI NEW GAME BTN
btnNew.addEventListener('click', init);
