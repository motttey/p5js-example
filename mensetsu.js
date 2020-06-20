const circle_size = 50;
let students;
let professors;

function collide(spriteA, spriteB) {
}

let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 600);
    p.background(255, 255, 255);
    p.angleMode(p.DEGREES);

    p.fill(135, 206, 235);
    let student = p.circle(p.random(p.width), p.random(p.height), circle_size);

    let x1 = p.random(p.width);
    let y1 = p.random(p.height);
    p.strokeWeight(1);
    p.fill(205, 133, 63);

    professors = new p.Group();

    p.rect(x1, y1, p.random(p.width), 50, 0);
    console.log(p.random(2));

    p.fill(255, 165, 0);
    for (let i = 0; i < p.random(20); i++) {
      // let professor = p.circle(p.random(p.width), p.random(p.height), circle_size);
      let professorSp = p.createSprite();
      professorSp.shapeColor = p.color(255, 165, 0);
      const x = p.random(p.width);
      const y = p.random(p.height);

      professorSp.draw = function() {
        p.strokeWeight(1);
        p.stroke(0,0,0);
        p.ellipse(x, y, circle_size, circle_size);
      }

      professorSp.setCollider('circle', x, y, circle_size/2);

      professorSp.overlap(professors, (professor, overlapped) => {
        overlapped.remove();
        console.log("removed");
      });
      
      professors.add(professorSp);
    }
    p.drawSprites();

  }
  p.draw = function(){
  }
}
new p5(sketch, 'container');
