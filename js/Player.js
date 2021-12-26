class Player {
  constructor() {
    this.playerName = "";
    this.playerDistance = 0;
    this.playerPosition = null;
  }
  createPlayerField() {
    var f = "allPlayers/player" + this.playerPosition;
    database.ref(f).set({
      distance: this.playerDistance,
      name: this.playerName,
    });
  }
  readAllPlayers() {
      var fieldRef = database.ref("allPlayers");
      fieldRef.on("value", function (data){
          allPlayers = data.val();
      })
  }
  readPlayerCount() {
    var playerRef = database.ref("playerCount");
    playerRef.on("value", function (data) {
      playerCount = data.val();
    });
  }
  writePlayerCount(x) {
    database.ref("/").update({
      playerCount: x,
    });
  }
}
