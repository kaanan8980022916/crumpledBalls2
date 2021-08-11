class paper{
constructor(x,y,r){
    var options = {
        restitution: 0.3,
        friction: 5,
        density: 0.9
    }
    this.image = loadImage("paper.png");

    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
this.w = r;
this.h = r;
}

display(){
    imageMode(RADIUS);
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h + 10);
}
}