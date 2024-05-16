'use strict';

// RANDOM BROJ
let randomBroj = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomBroj;

let score = 20;
let highScore = 0;
//  BTN-s
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
// func
const displayScore = scr => {
  return (document.querySelector('.score').textContent = scr);
};
const displayMessage = msg => {
  return (document.querySelector('.message').textContent = msg);
};
// const changeColorBody = color => {
//   return (document.querySelector('body').style.backgroundColor = color);
// };

checkBtn.addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (score <= 1) {
    displayMessage('GAME OVER');
    document.querySelector('body').style.backgroundColor = '#c21111';
    displayScore(0);
  } else if (!guess) {
    displayMessage('NO NUMBER');
    score--;
    displayScore(score);
  } else if (guess < 1 || guess > 20) {
    displayMessage('ENTER THE NUMBER FROM 1 TO 20');
    score--;
    displayScore(score);
  } else if (guess === randomBroj) {
    displayMessage('CORRECT NUMBER');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomBroj;
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < randomBroj) {
    displayMessage('ENTER A LARGER NUMBER');
    score--;
    displayScore(score);
  } else if (guess > randomBroj) {
    displayMessage('ENTER A SMALLER NUMBER');
    score--;
    displayScore(score);
  }
});

// AGAIN BTN

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let randomBroj = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = randomBroj;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222222';
});
