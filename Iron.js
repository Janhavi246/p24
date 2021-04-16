class Iron {
    constructor(x, y) {
      var options = {
         restitution:0.8,
         friction: 3,
         density:30,
       
        
      };
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      variron = this.body.position;
      Push()
      translate(ironpos.x, ironpos.y);
      strokeWeight(3);
      stroke('black')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };