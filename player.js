class Player {
  constructor(name) {
    this.id = name;
    this.wins = 0;
    this.SpacesOccupied = [];
    if (this.id === 'nacho') {
      this.token = `<img class="nacho-game-piece game-piece"
      alt="nacho-libre-game-piece" src="./assets/nacho.png">`
  } else if (this.id === 'esqueleto') {
      this.token = `<img class="esqueleto-game-piece game-piece"
      alt="esqueleto-game-piece" src="./assets/esqueleto.png">`
    }
  }

}
