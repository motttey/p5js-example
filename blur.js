const blue_size = 120;
const white_size = 250;
const yellow_circle_size = 50;
const red_circle_size = 75;

let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 1000);
    p.background(255,255,255);
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);

    p.fill(255,255,255);
    p.square(p.random(p.width),p.random(p.height),p.random(white_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(white_size));

    p.fill(255,255,0);
    p.circle(p.random(p.width),p.random(p.height),p.random(yellow_circle_size));

    // p.strokeWeight(1);
    p.fill(255,25,50);
    p.circle(p.random(p.width),p.random(p.height),p.random(red_circle_size));

    p.fill(0,188,214);
    p.square(p.random(p.width),p.random(p.height),p.random(blue_size));
    p.square(p.random(p.width),p.random(p.height),p.random(blue_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(blue_size));

    p.filter(p.BLUR, 5)
  }
}
new p5(sketch, 'container');
