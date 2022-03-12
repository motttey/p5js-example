const width = 1000;
const height = 600;
let glitch = new Glitch();

let sketch = function(p) {
  p.setup = function(){
    // createCanvas(600,425);
    p.createCanvas(1000, 600);
    p.background(255,255,255);

    glitch.loadType('jpg'); // specify jpeg file glitching, default
    glitch.loadQuality(.25); // optionally crunch to low quality
    glitch.loadImage('rakuimon2.jpg'); // load image by path

    glitch.randomBytes(10); // randomize 10 bytes
    glitch.replaceBytes(45, 127); // find + replace all
    glitch.replaceHex('ffdb00430001','ffdb004300ff'); // jpg quant table

    glitch.buildImage(); // creates image from glitched data
    p.image(glitch.image, 0, 0); // display glitched image
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);
    // p.fill(255,255,255);
  }
}
new p5(sketch, 'container');
