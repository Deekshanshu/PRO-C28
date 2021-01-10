class Mango{
    constructor(x, y, r) {
        this.image = loadImage("Plucking mangoes/mango.png")
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'density' : 1
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;

        World.add(world, this.body);
    }
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

}