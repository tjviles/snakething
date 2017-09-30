// game.js

import Snake from './snake';
import Food from './food';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake(50, 50, 16);
    this.points = 0;
    this.food = [];
    this.over = false;
    this.input = {
      direction: 'right'
    };
    // Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');
    // Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
    //create HTML UI Elements
    this.message = document.createElement('div');
    this.message.id = "message";
    this.message.innerText = "";
    document.body.appendChild(this.message);

    this.score = document.createElement('div');
    this.score.id = "score";
    this.score.innerText = "";
    document.body.appendChild(this.score);

    // Bind class functions
    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener('keydown', this.handleKeyDown);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    this.gameOver = this.gameOver.bind(this);
    // Start the game loop
    this.interval = setInterval(this.loop, 500);
  }

gameOver(){
  var message = document.getElementById("message");
  message.innerText = "Game Over";
  this.over = true;
}

//register key presses
handleKeyDown(event){
  event.preventDefault();
  switch(event.key){
    case 'w':
    case 'ArrowUp':
      this.input.direction = 'up';
      break;
    case 'a':
    case 'ArrowLeft':
      this.input.direction = 'left';
      break;
    case 's':
    case 'ArrowDown':
      this.input.direction = 'down';
      break;
    case 'd':
    case 'ArrowRight':
      this.input.direction = 'right';
      break;
  }
}

  /** @method update
    * Updates the game world.
    */
  update() {

    if(!this.over){
    // Did we smack a wall?
    // If we move off-board, game is over
    var position = this.snake.getPosition();
    if(position.x < 0 || position.x >= 100 ||
      position.y < 0 || position.y >= 100){
        return this.gameOver();
      }
    if(Math.random() < 0.1){
      this.food.push(new Food(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));
    }
    var scoreUpdate;
    this.food.forEach((food, index) => {
      scoreUpdate = food.update(this.snake.getPosition());
      if(scoreUpdate != 0){
        this.points += scoreUpdate;
        this.food.splice(index, 1);
      }
    });
    this.score.innerText = this.points;
    this.snake.update(this.input, this.gameOver);
    }
  }
  /** @method render
    * Renders the game world
    */
  render() {
    this.backBufferContext.fillStyle = '#ccc';
    this.backBufferContext.fillRect(0, 0, 100, 100);
    this.food.forEach((food) => {
      food.render(this.backBufferContext);
    })
    this.snake.render(this.backBufferContext);
    this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
  }

  loop() {
    this.update();
    this.render();
  }
}
