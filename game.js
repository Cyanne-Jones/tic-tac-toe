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

  updateSpacesOccupied(event) {
    this.spacesOccupied.push(event.target.id);
    this.whosTurn.spacesOccupiedByPlayer.push(event.target.id);
  };

  checkForWin() {
    for (var i = 0; i < winningGameBoxCombosArray.length; i++) {
      if (winningGameBoxCombosArray[i].sort().join(',') === nachoPlayer.spacesOccupiedByPlayer.sort().join(',')) {
        return true
      };
    }
    for (var i = 0; i < winningGameBoxCombosArray.length; i++) {
      if (winningGameBoxCombosArray[i].sort().join(',') === esqueletoPlayer.spacesOccupiedByPlayer) {
        return true
      };
    }
  }
}
