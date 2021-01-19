class Mango{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1

        }
        this.body = Bodies.rectangle(x, y , 50,50, options);
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        translate (pos.x , pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image ,0,0, this.w, this.h);
        pop();
    }
}