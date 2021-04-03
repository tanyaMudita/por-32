

class Rope{
    constructor(bodyA,pointB){
       var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length: 10
        }
        
        
        this.rope=Constraint.create(option);
        this.pointB=pointB
        World.add(world,this.rope);

    }

    attach(body){

        this.rope.bodyA=body;
        
    }

    fly(){

       this.rope.bodyA=null;

    }


    display(){
         
        if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        

    }
    }
    
}
