const blue_size = 120;
const white_size = 250;
const yellow_circle_size = 50;
const red_circle_size = 75;

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
  }

  // フレームごとの処理
  p.draw = function(){
    //着色
    p.strokeWeight(0);

    p.fill(255,255,255);
    p.square(p.random(p.width),p.random(p.height),p.random(white_size));
    p.circle(p.random(p.width),p.random(p.height),p.random(white_size));

    p.fill(240,240,0);
    p.drawingContext.shadowColor = p.color(255,255,0);
    p.circle(p.random(p.width),p.random(p.height),p.random(yellow_circle_size));

    p.fill(240,25,50);
    p.circle(p.random(p.width),p.random(p.height),p.random(red_circle_size));

    p.fill(0,188,214);
    p.drawingContext.shadowColor = p.color(0,188,214);
    p.square(p.random(p.width),p.random(p.height),p.random(blue_size));
    p.circle(p.mouseX, p.mouseY, 100);

    p.circle(p.random(p.width),p.random(p.height),p.random(blue_size));

    p.drawingContext.shadowColor = p.color(255,255,255);

    const now = p.millis();
    elapsedTime = now - startTIme;

    // 1秒ごとにblur
    if (elapsedTime >= 3000) {
      // (async () => console.log(await blur()))()
    }
  }
}
new p5(sketch, 'container');
