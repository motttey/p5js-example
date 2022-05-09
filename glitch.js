const width = 1000;
const height = 1000;
let image;

let sketch = function(p) {
  function draw_color_glitch(img, shift_size){
    p.background(0);

    let left_color = p.color(255, 0, 0);
    let right_color = p.color(0, 255, 255);

    p.push();
    p.blendMode(p.ADD);

    p.tint(left_color);
    p.image(img, -shift_size, 0);

    p.tint(right_color);
    p.image(img, shift_size, 0);
    p.pop();

    let img_glitch = p.get();
    p.clear();

    return img_glitch;
  }

  function draw_shift_glitch(img, shift_size){
    // p.image(img, 0, 0);
    p.background(0);
    p.image(img, -shift_size, 0);

    for(let i = 0; i < 100; i++){
      let sx = p.random(img.width * 0.5);
      let sy = p.random(img.height * 0.5);
      let x = p.random(img.width - sx * 0.5);
      let y = p.random(img.height - sy * 0.5);
      let ix = x + p.random(-1, 1) * shift_size;
      let iy = y ;

      p.image(img, ix, iy, sx, sy, x, y, sx, sy);
    }

    let img_glitch = p.get();
    p.clear();

    return img_glitch;
  }

  p.setup = function(){
    p.createCanvas(1000, 1000);
    p.background(255,255,255);

    p.loadImage('./rakuimon2.jpg', function(img){
      image = img;
    });
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);
    // p.fill(255,255,255);
    const img_shift = draw_shift_glitch(image, p.random(20));
    const img_color_shift = draw_color_glitch(img_shift, p.random(5));

    p.image(img_color_shift, 0, 0);
  }
}
new p5(sketch, 'container');
