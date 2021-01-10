class Stone {
    constructor(x, y, r) {
      this.image = loadImage("Plucking mangoes/stone.png")
      var options = {
          'isStatic':false,
          'restitutuion':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      
      World.add(world, this.body);
    }

/*attach(body){
        this.stone.bodyA = body;
    }
    
    fly(){
        this.stone.bodyA = null;
    }*/

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.r,this.r);
      pop();
    }
  };