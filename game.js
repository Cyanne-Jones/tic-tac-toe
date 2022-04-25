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
    punchAudio.play();
    updateIcon(event)
    this.spacesOccupied.push(event.target.id);
    this.whosTurn.spacesOccupiedByPlayer.push(event.target.id);
    removeUnoccupiedStatus(event.target);
  };

  checkForWin() {
    for (var i = 0; i < winningGameBoxCombosArray.length; i++) {
      if (winningGameBoxCombosArray[i].every(element => this.whosTurn.spacesOccupiedByPlayer.includes(element))) {
        return this.whosTurn;
      }
    }
  };

  checkForDraw() {
    if (this.spacesOccupied.length === 9) {
      return true;
    }
  };

  checkIfOccupiedSpace(event) {
      if ((!this.spacesOccupied.includes(event.target.id)) && (!event.target.classList.contains('game-piece'))) {
        this.continueTurn(event);
      }  else {
        alert('Choose an empty spot, silly goose!');
      }
    };

    resetSpacesOccupied() {
      this.spacesOccupied = [];
    };

    resetPlayerSpacesOccupied() {
      nachoPlayer.spacesOccupiedByPlayer = []
      esqueletoPlayer.spacesOccupiedByPlayer = [];
    };

    changeWhosFirst() {
      if (nachoPlayer.isFirst) {
        esqueletoPlayer.isFirst = true
        nachoPlayer.isFirst = false
        this.whosTurn = esqueletoPlayer;
      } else if (esqueletoPlayer.isFirst) {
        nachoPlayer.isFirst = true
        esqueletoPlayer.isFirst = false
        this.whosTurn = nachoPlayer;
      }
    };

    winnerWinnerChickenDinner(winner) {
      winner.increaseWins()
      updateAnnouncerWithWin(winner)
      updateWinText(winner)
      playWinAudio(winner);
      setTimeout(restartGame, 2000);
    };

    itsADraw() {
      cornAudio.play()
      updateAnnouncerWithDraw()
      setTimeout(restartGame, 2000);
    };

    continueTurn(event) {
      this.updateSpacesOccupied(event)
      if (this.checkForWin()) {
        this.winnerWinnerChickenDinner(this.checkForWin());
      } else if (this.checkForDraw()) {
        this.itsADraw();
      } else {
        this.switchPlayer();
      }
    };

  };
