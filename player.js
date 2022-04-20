class Player {
  constructor(name, isFirst) {
    this.id = name;
    this.wins = 0;
    this.isFirst = isFirst;
    this.currentTurn = isFirst;

    if (name === 'Nacho') {
      this.token = `<img class="nacho-game-piece game-piece"
      alt="nacho-libre-game-piece" src="./assets/nacho.png">`
    } else if (name === 'Esqueleto') {
      this.token = `<img class="esqueleto-game-piece game-piece"
      alt="esqueleto-game-piece" src="./assets/esqueleto.png">`
    } else {
      this.token = 'fuck'
    }

  }
  increaseWins() {
    this.wins++;
  };
}
