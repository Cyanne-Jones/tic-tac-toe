//QUERY SELECTORS
nachoWinsText = document.querySelector('#nachoWins');
esqueletoWinsText = document.querySelector('#esqueletoWins');
announcer = document.querySelector('#announcer');

gameBoard = document.querySelector('#gameBoard');

//EVENT LISTENERS
gameBoard.addEventListener('click', takeATurn);

//OBJ INSTANCE DECLARATIONS
var nachoPlayer = new Player('Nacho', true);
var esqueletoPlayer = new Player('Esqueleto', false);
var game = new Game();

//FUNCTIONS

function startNewGame() {
  game.players.push(nachoPlayer, esqueletoPlayer);
  game.whosTurn = nachoPlayer;
}
startNewGame();

function takeATurn(event) {
  var player = game.whosTurn;
  announcer.innerText = `${player.id}'s Turn!`
  game.gameSpacesOccupied[event.target.id] = player.id;
  console.log(game.gameSpacesOccupied);
  event.target.innerHTML = player.token;
  // checkForWin();
  switchPlayer();
}

function switchPlayer() {
  if (game.whosTurn === nachoPlayer) {
    game.whosTurn = esqueletoPlayer;
  } else if (game.whosTurn === esqueletoPlayer) {
    game.whosTurn = nachoPlayer;
  }
}
