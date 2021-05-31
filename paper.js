class paper
{

constructor(x,y,r){

var options={
    isStatics:false,
    restitution:0.3,
    friction:0,
    density:1.2
}

this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y, options);

World.add(world,this.body);
}

display(){
    var pos = this.body.position;



    Push();
    translate(pos.x,pos.y);
    Fill("white");

    imageMode(CENTER);
    image(this.image,this.body,r,r);

    Pop();
}



}