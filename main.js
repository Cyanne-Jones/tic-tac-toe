//QUERY SELECTORS
var nachoWinsText = document.querySelector('#nachoWins');
var esqueletoWinsText = document.querySelector('#esqueletoWins');
var announcer = document.querySelector('#announcer');
var gameBox1 = document.querySelector('#gameBox1');
var gameBox2 = document.querySelector('#gameBox2');
var gameBox3 = document.querySelector('#gameBox3');
var gameBox4 = document.querySelector('#gameBox4');
var gameBox5 = document.querySelector('#gameBox5');
var gameBox6 = document.querySelector('#gameBox6');
var gameBox7 = document.querySelector('#gameBox7');
var gameBox8 = document.querySelector('#gameBox8');
var gameBox9 = document.querySelector('#gameBox9');
var gameBoxes = document.querySelectorAll('.game-box');
var gameBoard = document.querySelector('#gameBoard');

//EVENT LISTENERS
gameBoard.addEventListener('click', takeATurn);

//OBJ INSTANCE DECLARATIONS
var game = new Game();
var nachoPlayer = new Player('Nacho', true);
var esqueletoPlayer = new Player('Esqueleto', false);

//GLOBAL VARIABLES
var winningGameBoxCombosArray = [
  ['gameBox1', 'gameBox2', 'gameBox3'],
  ['gameBox4', 'gameBox5', 'gameBox6'],
  ['gameBox7', 'gameBox8', 'gameBox9'],
  ['gameBox1', 'gameBox4', 'gameBox7'],
  ['gameBox2', 'gameBox5', 'gameBox8'],
  ['gameBox3', 'gameBox6', 'gameBox9'],
  ['gameBox1', 'gameBox5', 'gameBox9'],
  ['gameBox3', 'gameBox5', 'gameBox7'],
];

//FUNCTIONS

game.startNewGame();

function takeATurn(event) {
  game.checkIfOccupiedSpace(event);
}

function updateAnnouncerWithWin() {
  announcer.innerText = `${game.whosTurn.id} won!`
}

function updateAnnouncerWithNewPlayer() {
  announcer.innerText = `${game.whosTurn.id}'s Turn!`
}

function updateIcon(event) {
  event.target.innerHTML = game.whosTurn.token;
}

function updateWinText(winner) {
  if (winner === nachoPlayer) {
    nachoWinsText.innerText = `${nachoPlayer.wins} win`
  } else if (winner === esqueletoPlayer) {
    esqueletoWinsText.innerText = `${esqueletoPlayer.wins} win`
  }
}

function clearGameBoard() {
  gameBox1.innerHTML = '';
  gameBox2.innerHTML = '';
  gameBox3.innerHTML = '';
  gameBox4.innerHTML = '';
  gameBox5.innerHTML = '';
  gameBox6.innerHTML = '';
  gameBox7.innerHTML = '';
  gameBox8.innerHTML = '';
  gameBox9.innerHTML = '';
}

function restartGame() {
  game.resetSpacesOccupied();
  game.resetPlayerSpacesOccupied();
  game.changeWhosFirst();
  updateAnnouncerWithNewPlayer();
  clearGameBoard();
};
