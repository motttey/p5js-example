const blue_size = 120;
const white_size = 250;
const yellow_circle_size = 50;
const red_circle_size = 75;
const opacity_max = 127;

let red_circle_pos;

let startTIme;
let elapsedTime;


let sketch = function(p) {

  function setContext(){
      let xv = Math.abs(Math.sin(elapsedTime/100))*50
      p.drawingContext.shadowBlur = 100;
      p.drawingContext.shadowColor = p.color(255,255,0);
  }

  async function blur() {
    p.filter(p.BLUR, 1);
  }

  p.setup = function(){
    // createCanvas(600,425);
    startTIme = p.millis();

    p.createCanvas(1000, 1000);
    p.background(255,255,255);

    p.drawingContext.shadowBlur = 100;
    p.drawingContext.shadowColor = p.color(255,255,255);

    red_circle_pos = [p.random(p.width), p.random(p.height)]
  }

  // フレームごとの処理
  p.draw = function(){
    const now = p.millis();
    elapsedTime = now - startTIme;
    //着色
    p.strokeWeight(0);

    p.fill(255,255,255);
    // p.square(p.random(p.width),p.random(p.height),p.random(white_size));
    p.ellipse(p.random(p.width),p.random(p.height),p.random(white_size), p.random(white_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(white_size));

    p.fill(240,240,0,p.random(opacity_max));
    p.drawingContext.shadowColor = p.color(240,240,0);
    p.circle(p.random(p.width),p.random(p.height),p.random(yellow_circle_size));

    p.fill(240,25,50);
    p.circle(p.random(p.width),p.random(p.height),p.random(red_circle_size));


    p.fill(0,188,214,p.random(opacity_max));
    p.drawingContext.shadowColor = p.color(0,188,214);
    // p.square(p.random(p.width),p.random(p.height),p.random(blue_size));
    p.circle(
      red_circle_size * Math.sin(elapsedTime % Math.PI*2) + red_circle_pos[0],
      red_circle_size * Math.cos(elapsedTime % Math.PI*2) + red_circle_pos[1],
      p.random(red_circle_size)
    );

    p.ellipse(p.random(p.width),p.random(p.height),p.random(blue_size), p.random(blue_size));
    p.circle(p.mouseX, p.mouseY, 100);

    p.circle(p.random(p.width),p.random(p.height),p.random(blue_size));

    p.drawingContext.shadowColor = p.color(255,255,255);


    // 1秒ごとにblur
    if (elapsedTime >= 3000) {
      // (async () => console.log(await blur()))()
      // p.clear();
      // startTIme = p.millis();
    }
  }
}
new p5(sketch, 'container');
