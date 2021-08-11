class dustbin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.image = loadImage("dustbingreen.png");

        this.bodyleft= Bodies.rectangle(x,y,10,180,options); 
        this.bodyright= Bodies.rectangle(x+220,y,10,180,options); 
        this.bodydown= Bodies.rectangle(x+110,y+90,230,20,options);

    World.add(world,this.bodyleft);
    World.add(world,this.bodyright);
    World.add(world,this.bodydown);
    
    }
    display(){
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.bodyleft.position.x, this.bodyleft.position.y, 10, 180); 
        rect(this.bodyright.position.x, this.bodyright.position.y, 10, 180); 
        imageMode(CENTER);
        image(this.image,this.bodydown.position.x,this.bodydown.position.y-90,250,200)
       pop();
    }
}