const circle_size = 50;

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
    // p.rotate(90);
    p.rect(x1, y1, p.random(p.width), 50, 0);
    console.log(p.random(2));

    p.fill(255, 165, 0);
    for (let i = 0; i < p.random(20); i++) {
      let professor = p.circle(p.random(p.width), p.random(p.height), circle_size);
      /*
      students.overlap(professors, (student, overLappedProf) => {
        overLappedProf.remove();
      });
      */
    }

  }
}
new p5(sketch, 'container');
