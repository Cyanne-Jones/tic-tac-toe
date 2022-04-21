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

var winningGameBoxCombosObj = [
  {
    gameBox1: true,
    gameBox2: true,
    gameBox3: true
  },
  {
    gameBox4: true,
    gameBox5: true,
    gameBox6: true
  },
  {
    gameBox7: true,
    gameBox8: true,
    gameBox9: true
  },
  {
    gameBox1: true,
    gameBox4: true,
    gameBox7: true
  },
  {
    gameBox2: true,
    gameBox5: true,
    gameBox8: true
  },
  {
    gameBox3: true,
    gameBox6: true,
    gameBox9: true
  },
  {
    gameBox1: true,
    gameBox5: true,
    gameBox9: true
  },
  {
    gameBox3: true,
    gameBox5: true,
    gameBox7: true
  }];
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
    console.log('before', event.target.classList.contains('occupied'))
    if (!event.target.classList.contains('occupied')) {
      event.target.classList.add('occupied');
      console.log('after', event.target.classList.contains('occupied'))
      game.updatePlayerSpaces()
      event.target.innerHTML = game.whosTurn.token;
      game.checkForWin();
      game.switchPlayer();
      announcer.innerText = `${game.whosTurn.id}'s Turn!`
    } else {
       alert('Choose an empty spot, silly goose!')
  }
}
