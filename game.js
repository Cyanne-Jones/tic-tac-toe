class Game {
  constructor() {
    this.players = [];
    this.spacesOccupied = [];
    this.whosTurn = '';
  };

  startNewGame() {
    this.players.push(nachoPlayer, esqueletoPlayer);
    this.whosTurn = nachoPlayer;
  };

  switchPlayer() {
    if (this.whosTurn === nachoPlayer) {
      this.whosTurn = esqueletoPlayer;
    } else if (this.whosTurn === esqueletoPlayer) {
      this.whosTurn = nachoPlayer;
    }
    updateAnnouncerWithNewPlayer();
  };

  updateSpacesOccupied(event) {
    this.spacesOccupied.push({[event.target.id]: [this.whosTurn]});
    console.log('spacesOccupied', this.spacesOccupied)
    this.whosTurn.spacesOccupiedByPlayer.push(event.target.id);
  };

  checkForWin() {
    for (var i = 0; i < winningGameBoxCombosArray.length; i++) {
      if (winningGameBoxCombosArray[i].sort().join(',') === this.whosTurn.spacesOccupiedByPlayer.sort().join(',')) {
        return this.whosTurn
      };
    }
  };

  updateWins() {
    this.whosTurn.increaseWins();
    console.log(this.whosTurn.wins);
  };

  checkIfOccupiedSpace(event) {
      if ((!this.spacesOccupied.includes(event.target.id)) && (!event.target.classList.contains('game-piece'))) {
        this.continueTurn(event);
      }  else {
        alert('Choose an empty spot, silly goose!')
      }
    };

    resetSpacesOccupied() {
      this.spacesOccupied = [];
    };

    // restartGame() {
    //   this.resetSpacesOccupied();
    //   this.resetPlayerSpacesOccupied();
    //   this.changeWhosFirst();
    //   updateAnnouncerWithNewPlayer();
    //   clearGameBoard();
    // };

    resetPlayerSpacesOccupied() {
      nachoPlayer.spacesOccupiedByPlayer = [];
      esqueletoPlayer.spacesOccupiedByPlayer = [];
    };

    changeWhosFirst() {
      if (nachoPlayer.isFirst) {
        esqueletoPlayer.isFirst = true
        nachoPlayer.isFirst = false;
        this.whosTurn = esqueletoPlayer
      } else if (esqueletoPlayer.isFirst) {
        nachoPlayer.isFirst = true
        esqueletoPlayer.isFirst = false
        this.whosTurn = nachoPlayer;
      }
    };

    continueTurn(event) {
      this.updateSpacesOccupied(event);
      updateIcon(event);
      if (this.checkForWin()) {
        this.whosTurn.increaseWins();
        updateAnnouncerWithWin();
        updateWinText(this.checkForWin());
        setTimeout(restartGame, 3000);
        return;
      }
      this.switchPlayer();
    };

  };
