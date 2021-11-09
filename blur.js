const cyan_size = 100;
const white_size = 120;

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

    p.fill(100,255,255);
    p.square(p.random(p.width),p.random(p.height),p.random(cyan_size));

    p.fill(255,255,255);
    p.square(p.random(p.width),p.random(p.height),p.random(white_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(white_size));

    p.filter(p.BLUR, 5)
  }
}
new p5(sketch, 'container');
