class Game {
  constructor() {}
  startTheGame() {
    form.greeting.hide();
    player.readAllPlayers();
    var i = 0;
    var h = 200;
    image(
      backgroundImage,
      0,
      -displayHeight * 5,
      displayWidth,
      displayHeight * 6
    );
    for (var plr in allPlayers) {
      allCars[i].x = h;
      console.log(allCars[i].x);
      allCars[i].y = displayHeight - allPlayers[plr].distance;
      i = i + 1;
      h = h + 500;
    }

    drawSprites();
  }
  readGameState() {
    var gameRef = database.ref("gameState");
    gameRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  writeGameState(x) {
    database.ref("/").update({
      gameState: x,
    });
  }
}
