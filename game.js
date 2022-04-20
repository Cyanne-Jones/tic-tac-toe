class Game {
  constructor() {
    this.players = [];
    this.gameSpacesOccupied = {
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
}
