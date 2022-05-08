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

  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 1000);
    p.background(255,255,255);

    p.loadImage('rakuimon2.jpg', function(img){
      /*
      glitch.loadType('jpg');
      glitch.loadQuality(.25);
      glitch.loadImage('./rakuimon2.jpg');

    	glitch.loadImage(img);

      glitch.randomBytes(10);
      glitch.replaceBytes(45, 127);
      glitch.replaceHex('ffdb00430001','ffdb004300ff');

      glitch.buildImage();
      */
      image = img;
    });
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);
    // p.fill(255,255,255);
    p.image(draw_color_glitch(image, p.random(5)), 0, 0);

  }
}
new p5(sketch, 'container');
