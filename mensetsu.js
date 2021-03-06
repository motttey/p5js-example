const circle_size = 50;
let students;
let professors;
let deskSp, studentSp;

let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(1000, 600);
    p.background(255, 255, 255);
    p.angleMode(p.DEGREES);

    studentSp = p.createSprite();

    const s_x = p.random(p.width);
    const s_y = p.random(p.height);

    studentSp.draw = function() {
      p.strokeWeight(1);
      p.stroke(0,0,0);
      p.fill(135, 206, 235);
      p.ellipse(s_x, s_y, circle_size, circle_size);
    }

    // studentSp.setCollider('circle', s_x, s_y, circle_size/2);

    let deskCreatedFlag = false;
    deskSp = p.createSprite();

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

    for (let i = 0; i < p.random(100); i++) {
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
      // professorSp.debug = true;

      professorSp.overlap(professors, (professor, overlapped) => {
        // console.log("collision");
        professor.remove();
      });

      professors.overlap(deskSp, (professor, desk) =>{
        console.log("collision");
        professor.remove();
      });

    }
    deskSp.collide(studentSp);
    p.drawSprites();

    const info_x = 650;
    const info_y = 450;

    p.fill(255, 255, 255);
    p.rect(info_x, info_y, 200, 150);

    p.fill(255, 165, 0);
    p.circle(info_x + 40, info_y + 75, 16);

    p.fill(135, 206, 235);
    p.circle(info_x + 40, info_y + 105, 16);

    p.fill(222, 184, 135);
    p.rect(info_x + 10, info_y + 35, 50, 20);

    p.fill(0, 0, 0);
    p.textSize(16);
    p.text('机', info_x + 100, info_y + 50);
    p.text('面接官', info_x + 100, info_y + 80);
    p.text('受験者', info_x + 100, info_y + 110);
  }
  p.draw = function(){
    professors.collide(deskSp, (professor, desk) => {
      console.log("collision");
      professor.remove();
    });

    /*
    studentSp.overlap(professors, (student, overlapped) => {
      console.log("collision");
      overlapped.collide(student);
    });
    */

    deskSp.collide(studentSp);
    p.drawSprites();
  }
}
new p5(sketch, 'container');
