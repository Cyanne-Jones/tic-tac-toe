class Game {
  constructor() {
    this.players = [];

    this.spacesOccupiedByNacho = {
      gameBox1: null,
      gameBox2: null,
      gameBox3: null,
      gameBox4: null,
      gameBox5: null,
      gameBox6: null,
      gameBox7: null,
      gameBox8: null,
      gameBox9: null,
    };
    this.spacesOccupiedByEsq = {
      gameBox1: null,
      gameBox2: null,
      gameBox3: null,
      gameBox4: null,
      gameBox5: null,
      gameBox6: null,
      gameBox7: null,
      gameBox8: null,
      gameBox9: null,
    };
    this.whosTurn = '';
  }
  updateSpaces(player, whereClicked) {
    this.gameSpacesOccupied[whereClicked] = player;
  }

  switchPlayer() {
    if (this.whosTurn === nachoPlayer) {
      this.whosTurn = esqueletoPlayer;
    } else if (this.whosTurn === esqueletoPlayer) {
      this.whosTurn = nachoPlayer;
    }
  }

  updatePlayerSpaces() {
    if (this.whosTurn === nachoPlayer) {
      this.spacesOccupiedByNacho[event.target.id] = true;
    } else if (this.whosTurn === esqueletoPlayer) {
      this.spacesOccupiedByEsq[event.target.id] = true;
    }
  };

  checkForWin() {
    for (var i = 0; i < winningGameBoxCombosObj.length; i++) {
      if(winningGameBoxCombosObj[i] == this.spacesOccupiedByNacho) {
        console.log('nacho won')
      };
    }
    for (var i = 0; i < winningGameBoxCombosObj.length; i++) {
      if(winningGameBoxCombosObj[i] == this.spacesOccupiedByEsq) {
        console.log('esq won')
      };
    }
  }

}
