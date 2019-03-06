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

function rollDice() {
  var roll = Math.floor((Math.random() * 6) + 1);
  if (roll === 1) {
    roundScore[activePlayer] = 0;
    endRound(activePlayer);
  }
  else {
    roundScore[activePlayer] += roll;
  }
  // Update current player's round score
  updateRoundScore()
  updateDice(roll);
}

function newGame() {
  // reset active player
  player0Active()

  //reset game values
  globalScore = [0,0];
  roundScore = [0,0];
  document.querySelector('#score-0').textContent = globalScore[0];
  document.querySelector('#score-1').textContent = globalScore[1];
  document.querySelector('#current-0').textContent = roundScore[0];
  document.querySelector('#current-1').textContent = roundScore[1];
}


function endRound () {
  globalScore[activePlayer] += roundScore[activePlayer];
  document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];
  checkWinCondition()

  roundScore[activePlayer] = 0;
  document.querySelector('#current-' + activePlayer).textContent = roundScore[activePlayer];
  switch (activePlayer) {
    case 0:
      player1Active()
      break;
    case 1:
      player0Active()
  }
}

function checkWinCondition () {
  if (globalScore[activePlayer] >= 100) {
    console.log('Player ' + (activePlayer+1) + ' Wins!!!');
  }
}

function updateDice(roll) {
  document.getElementById('diceimage').src = 'dice-' + roll + '.png';
}

function player0Active() {
  activePlayer = 0;
  document.getElementById('player0div').className = "player-0-panel active";
  document.getElementById('player1div').className = "player-1-panel";
}

function player1Active() {
  activePlayer = 1;
  document.getElementById('player1div').className = "player-1-panel active";
  document.getElementById('player0div').className = "player-0-panel";
}

function updateRoundScore() {
  document.querySelector('#current-' + activePlayer).textContent = roundScore[activePlayer];
}
