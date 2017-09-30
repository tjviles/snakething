export default class Food{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  update(position){
    var x = position.x;
    var y = position.y;
    if(x === this.x && y === this.y){
      return 50;
    }
    else{
      return 0;
    }
  }

  render(ctx){
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, 1, 1);
    ctx.restore();
  }
}
