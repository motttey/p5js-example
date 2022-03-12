const width = 1000;
const height = 600;

let libs = ["includes/libs/p5.glitch.js"];
let glitch = new Glitch();

let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 600);
    p.background(255,255,255);

    p.loadImage('rakuimon2.jpg', function(img){
      glitch.loadType('jpg');
      glitch.loadQuality(.25);
      glitch.loadImage('./rakuimon2.jpg');

    	glitch.loadImage(img);

      glitch.randomBytes(10);
      glitch.replaceBytes(45, 127);
      glitch.replaceHex('ffdb00430001','ffdb004300ff');

      glitch.buildImage();
      p.image(glitch.image, 0, 0);
    });
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);
    // p.fill(255,255,255);
  }
}
new p5(sketch, 'container');
