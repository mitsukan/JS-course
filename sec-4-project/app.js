/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// Math.floor((Math.random() * 6) + 1)
// this will generate a number between 1-6.

var globalScore = [0,0];
var roundScore = [0,0];
var activePlayer = 0;

function rollDice () {
  var roll = Math.floor((Math.random() * 6) + 1);
  if (roll === 1) {
    roundScore[activePlayer] = 0;
  }
  else {
    roundScore[activePlayer] += roll;
  }
  document.querySelector('#current-' + activePlayer).textContent = roundScore[activePlayer];
  if
}

function endRound (player) {
  globalScore[player] += roundScore[player];
  roundScore[player] = 0;
  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
  }
}

function checkWinCondition (player) {
  if (globalScore[player] >= 100) {
    console.log('Win!!!');
  }
}
