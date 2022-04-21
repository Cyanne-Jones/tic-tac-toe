class Game {
  constructor() {
    this.players = [];

    this.spacesOccupied = [];
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
      nachoPlayer.spacesOccupiedByPlayer.push(event.target.id);
      nachoPlayer.spacesOccupiedByPlayer;
    } else if (this.whosTurn === esqueletoPlayer) {
      esqueletoPlayer.spacesOccupiedByPlayer.push(event.target.id);
      esqueletoPlayer.spacesOccupiedByPlayer;
    }
  };

  checkForWin() {
    for (var i = 0; i < winningGameBoxCombosArray.length; i++) {
      if(winningGameBoxCombosArray[i].sort().join(',') === nachoPlayer.spacesOccupiedByPlayer.sort().join(',')) {
        return console.log('nacho won')
      };
    }
    for (var i = 0; i < winningGameBoxCombosObj.length; i++) {
      if (winningGameBoxCombosArray[i].sort().join(',') === esqueletoPlayer.spacesOccupiedByPlayer) {
        return console.log('esq won')
      };
    }
  }
}
