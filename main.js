let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 600);
    p.background(0, 10, 0);
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.fill(p.random(p.width),p.random(p.width),p.random(p.width));
    p.square(p.random(p.width),p.random(p.height),100);
  }
}
new p5(sketch, 'container');
