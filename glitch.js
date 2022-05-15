const width = 1000;
const height = 1000;
let image;

let sketch = function(p) {
  function draw_color_glitch(img, shift_size){
    p.background(0);

    let left_color = p.color(255, 128, 0);
    let right_color = p.color(0, 128, 255);

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
    p.image(img, -1 * p.random(20), p.random(20));

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

  function draw_noise (img) {
    p.background(0);
    p.image(img, 0, 0);

    p.push();
    p.strokeWeight(0);
    const scale = 0.01;

    for(let i=0; i < img.width; i += 5){
      for(let j=0; j < img.height; j += 5){
        if (p.random(1) >= 0.8) {
          p.fill(128 + p.random(127), 128 + p.random(127), 128 + p.random(127), 128 * p.noise(i * scale, j * scale));
          p.rect(p.random(img.width), p.random(img.height), 3 * p.random());
        }
      }
    }
    p.pop();

    let img_noise = p.get();
    p.clear();

    return img_noise;
  }

  const builder = function(img) {
    this._img = img;
  }

  builder.prototype = {
    // 文字連結
    draw_color_glitch: function(shift_size) {
      this._img = draw_color_glitch(this._img, shift_size);
      return this;
    },
    draw_shift_glitch: function(shift_size) {
      this._img = draw_shift_glitch(this._img, shift_size);
      return this;
    },
    draw_noise: function() {
      this._img = draw_noise(this._img);
      return this;
    },
    draw_img: function () {
      p.image(this._img, 0, 0);
    }
  }

  p.setup = function(){
    p.createCanvas(1000, 1000);
    p.background(255,255,255);

    p.loadImage('./internetdora.jpg', function(img){
      image = img;
    });
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);

    if (image != null) {
      // p.fill(255,255,255);
      const result = new builder(image)
        .draw_shift_glitch(p.random(25))
        .draw_color_glitch(p.random(5))
        .draw_noise()
        .draw_img();
    }
  }
}
new p5(sketch, 'container');
