class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputBox = createInput("Enter Your Name");
    this.button = createButton("Register");
    this.greeting = createElement("h1");
  }
  displayForm() {
    this.heading.html("Driver Registration Form");
    this.heading.position(displayWidth - 1200, displayHeight - 1100);
    this.inputBox.position(displayWidth - 1100, displayHeight - 900);
    this.button.position(displayWidth - 1050, displayHeight - 700);
    this.button.mousePressed(()=>{
      this.heading.hide();
      this.inputBox.hide();
      this.button.hide();
      player.playerName = this.inputBox.value();
      this.greeting.html("Welcome " + player.playerName);
      this.greeting.position(displayWidth - 1200, displayHeight - 800);
      playerCount = playerCount +1;
      player.playerPosition = playerCount;
      player.writePlayerCount(playerCount);
      player.createPlayerField();
    })
    
  }
}