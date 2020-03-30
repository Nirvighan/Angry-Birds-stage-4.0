class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //load the images for the catapult and the rubber band
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        //load the image for the catapult
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);


        if (this.sling.bodyA != null) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //create the rubber band and make it look like realistic
            stroke(48, 22, 8);
            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);
            } else {

                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);



            }
            pop();
        }
    }

}