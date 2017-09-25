class Snake{
  constructor(x,y,segments){
    this.body = [];
    for(var i = 0; i < segments; i++){
      this.body.push({
        x: x - i,
        y: y,
      });
    }
    this.direction = 'right';
  }
  checkForConsuption(food){

  }
  update(){
    //Did we hit a wall?
    //Did we eat ourselves??
    //Did we eat any food?
    //Should we be growing?
  }

//Render the snake, pass in canvas context
  render(ctx){
    this.body.forEach(function(segment){
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(
        segment.x,
        segment.y ,
        1,
        1
      );
      ctx.restore();
    })
  }
}
