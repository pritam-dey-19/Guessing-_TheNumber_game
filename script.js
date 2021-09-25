'use strict';

/*console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct NUmber!';
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//display message function:

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    //  document.querySelector('.message').textContent = 'no number!';displayMessage = function (message) {
    displayMessage('No number!');
  }

  //when players wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#00FF00';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  //when players input wrong input
  else if (guess !== secretNumber) {
    //else if (guess > secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? 'High!' : 'Low!';*/
      displayMessage(guess > secretNumber ? 'High!' : 'Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game!');
      //document.querySelector('.message').textContent = 'You Lost the game!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //const guess = Number(document.querySelector('.guess').value);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //document.querySelector('.message').textContent = 'Start Guessing..';
  displayMessage('Strat guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
