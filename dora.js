const red_circle_size = 30;
const yellow_circle_size = 50;
const blue_size = 100;
const white_size = 120;
const line_max = 200;

let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 600);
    p.background(255,255,255);
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);
    p.fill(255,255,255);
    p.square(p.random(p.width),p.random(p.height),p.random(white_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(white_size));

    p.fill(0,188,214);
    p.square(p.random(p.width),p.random(p.height),p.random(blue_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(blue_size));

    p.strokeWeight(1);
    p.fill(255,0,0);
    p.circle(p.random(p.width),p.random(p.height),p.random(red_circle_size));

    p.strokeWeight(0);
    let x1 = p.random(p.width);
    let y1 = p.random(p.height);
    // p.rect(x1, y1, x1 + p.random(p.red_circle_size) * 10, y1 + p.random(p.red_circle_size), 20);
    p.rotate(p.PI / p.random(3.0));
    p.rect(x1, y1, 100 * p.random(10), p.random(10), 20);

    p.strokeWeight(1);
    p.fill(255,255,0);
    p.circle(p.random(p.width),p.random(p.height),p.random(yellow_circle_size));

    for (let i = 0; i < 5; i++) {
      let x1 = p.random(p.width);
      let y1 = p.random(p.height);

      p.strokeWeight(1.5);
      p.noFill();
      p.line(x1, y1, x1 + p.random(line_max), y1 + p.random(line_max));
    }
  }
}
new p5(sketch, 'container');
