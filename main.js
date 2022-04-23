//QUERY SELECTORS
var nachoWinsText = document.querySelector('#nachoWins');
var esqueletoWinsText = document.querySelector('#esqueletoWins');
var announcer = document.querySelector('#announcer');
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
};

function updateAnnouncerWithWin(winner) {
  announcer.innerText = `${winner.id} won!`
};

function updateAnnouncerWithNewPlayer() {
  announcer.innerText = `${game.whosTurn.id}'s Turn!`
};

function updateIcon(event) {
  event.target.innerHTML = game.whosTurn.token;
};

function updateWinText(winner) {
  if (winner === nachoPlayer) {
    nachoWinsText.innerText = `${nachoPlayer.wins} win`
  } else if (winner === esqueletoPlayer) {
    esqueletoWinsText.innerText = `${esqueletoPlayer.wins} win`
  }
};

function updateAnnouncerWithDraw() {
  announcer.innerText = `It's a DRAW!`
};

function clearGameBoard() {
  for (var i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].innerHTML = '';
  }
};

function restartGame() {
  game.resetSpacesOccupied();
  game.resetPlayerSpacesOccupied();
  game.changeWhosFirst();
  updateAnnouncerWithNewPlayer();
  clearGameBoard();
};
