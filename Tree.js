class Tree{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y , 50,50, options);
        this.w = 50;
        this.h = 50;
        this.image = loadImage("Plucking mangoes/tree.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image , pos.x  ,pos.y -200, 500,900);
    }
}