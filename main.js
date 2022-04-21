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

function startNewGame() {
  game.players.push(nachoPlayer, esqueletoPlayer);
  game.whosTurn = nachoPlayer;
}
startNewGame();



function takeATurn(event) {
    if ((!game.spacesOccupied.includes(event.target.id)) && (!event.target.classList.contains('game-piece'))) {
      game.updateSpacesOccupied(event)
      event.target.innerHTML = game.whosTurn.token;
      if (game.checkForWin()) {
        return announcer.innerText = `${game.whosTurn.id} won!`
      }
      game.switchPlayer();
      announcer.innerText = `${game.whosTurn.id}'s Turn!`
    } else {
       alert('Choose an empty spot, silly goose!')
  }
};
