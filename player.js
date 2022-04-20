class Player {
  constructor(name, isFirst) {
    this.id = name;
    this.wins = 0;
    this.SpacesOccupied = [];
    this.isFirst = isFirst;
    this.currentTurn = true;
    if (this.id === 'nacho') {
      this.token = `<img class="nacho-game-piece game-piece"
      alt="nacho-libre-game-piece" src="./assets/nacho.png">`
    } else if (this.id === 'esqueleto') {
      this.token = `<img class="esqueleto-game-piece game-piece"
      alt="esqueleto-game-piece" src="./assets/esqueleto.png">`
    }
  }
  increaseWins() {
    this.wins++;
  };
};
