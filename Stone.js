class Stone {
    constructor(x, y) {
      var options = {
        restitution:0.8,
        friction: 0.9,
         density:12,
        
      };
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      varstone = this.body.position;
      Push()
      translate(stonepos.x, stonepos.y);
      strokeWeight(4);
      stroke('dark blue')
      fill('light blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };