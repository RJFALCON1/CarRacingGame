var canvas;
var backgroundImage;
var car1Image, car2Image;
var database;
var form, player;
var playerCount;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1s, car2s;
var allCars= [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  car1s = createSprite(200,200);
  car2s = createSprite(400,200);
  car1s.scale= 0.1;
  car2s.scale = 0.1;
  car1s.addImage(car1Image);
  car2s.addImage(car2Image);
  allCars.push(car1s);
  allCars.push(car2s);
  
  game = new Game();
  game.readGameState();
  if (gameState == 0) {
    player = new Player();
    player.readPlayerCount();
    form = new Form(); 
    form.displayForm();
  }
}

function draw() {
  background("white");
  if (playerCount == 2) {
    game.writeGameState(1);
  }
  if (gameState == 1) {
    game.startTheGame();
  }
}

