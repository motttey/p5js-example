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

    let studentSp = p.createSprite();

    const s_x = p.random(p.width);
    const s_y = p.random(p.height);

    studentSp.draw = function() {
      p.strokeWeight(1);
      p.stroke(0,0,0);
      p.fill(135, 206, 235);
      p.ellipse(s_x, s_y, circle_size, circle_size);
    }

    studentSp.setCollider('circle', s_x, s_y, circle_size/2);

    let deskCreatedFlag = false;
    let deskSp = p.createSprite();

    const d_x = p.random(p.width);
    const d_y = p.random(p.height);
    const d_size = 50 + p.random(p.width/2);

    deskSp.draw = function() {
      p.strokeWeight(1);
      p.stroke(0,0,0);
      p.fill(222, 184, 135);
      p.rect(d_x, d_y, d_size, 50, 0);
    }

    deskSp.setCollider('rectangle', d_x, d_y, d_size, 50);
    // deskSp.mouseActive = true;
    // deskSp.debug = true;

    deskSp.overlap(studentSp, (professor, overlapped) =>{
      overlapped.remove();
    });

    professors = new p.Group();

    for (let i = 0; i < p.random(20); i++) {
      // let professor = p.circle(p.random(p.width), p.random(p.height), circle_size);
      let professorSp = p.createSprite();
      const x = p.random(p.width);
      const y = p.random(p.height);

      professorSp.draw = function() {
        p.strokeWeight(1);
        p.stroke(0,0,0);
        p.fill(255, 165, 0);
        p.ellipse(x, y, circle_size, circle_size);
      }

      professorSp.setCollider('circle', x, y, circle_size/2);
      professors.add(professorSp);

      professorSp.overlap(professors, (professor, overlapped) => {
        overlapped.remove();
      });

      professorSp.overlap(studentSp, (professor, overlapped) =>{
        overlapped.remove();
      });

      professorSp.overlap(deskSp, (professor, overlapped) =>{
        overlapped.remove();
      });
    }
    p.drawSprites();

    p.fill(255, 255, 255);
    p.rect(650, 450, 200, 150);

    p.fill(255, 165, 0);
    p.circle(690, 525, 16);

    p.fill(135, 206, 235);
    p.circle(690, 555, 16);

    p.fill(222, 184, 135);
    p.rect(660, 485, 50, 20);

    p.fill(0, 0, 0);
    p.textSize(16);
    p.text('机', 750, 500);
    p.text('面接官', 750, 530);
    p.text('受験者', 750, 560);

  }
  p.draw = function(){
  }
}
new p5(sketch, 'container');
