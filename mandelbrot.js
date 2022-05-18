const height = 700;
const width = 700;
let maxiterations = 100;

let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(width, height);
    p.pixelDensity(1);
    p.noLoop();
  }

  // フレームごとの処理
  p.draw = function(){
    p.background(0);

    // Establish a range of values on the complex plane
    // A different range will allow us to "zoom" in or out on the fractal

    // It all starts with the width, try higher or lower values
    const w = 3;
    const h = (w * height) / width;

    // Start at negative half the width and height
    const xmin = -w/1.5;
    const ymin = -h/2;

    // Make sure we can write to the pixels[] array.
    // Only need to do this once since we don't do any other drawing.
    p.loadPixels();

    // Maximum number of iterations for each point on the complex plane
    maxiterations = p.random(100) + 300;

    // x goes from xmin to xmax
    const xmax = xmin + w;
    // y goes from ymin to ymax
    const ymax = ymin + h;

    // Calculate amount we increment x,y for each pixel
    const dx = (xmax - xmin) / (width);
    const dy = (ymax - ymin) / (height);

    // Start y
    let y = ymin;
    for (let j = 0; j < height; j++) {
      // Start x
      let x = xmin;
      for (let i = 0; i < width; i++) {

        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
          const aa = a * a;
          const bb = b * b;
          const twoab = 2.0 * a * b;
          a = aa - bb + x;
          b = twoab + y;
          // Infinty in our finite world is simple, let's just consider it 16
          if (p.dist(aa, bb, 0, 0) > 16) {
            break;  // Bail
          }
          n++;
        }
        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i+j*width)*4;
        const norm = p.map(n, 0, maxiterations, 0, 1);
        let bright = p.map(p.sqrt(norm), 0, 1, 1, 255);
        if (n == maxiterations) {
          bright = 0;
        } else {
          // darken center colors
          if (n > 25) {
            p.pixels[pix + 0] = 0;
            p.pixels[pix + 1] = 0;
            p.pixels[pix + 2] = 0;
            p.pixels[pix + 3] = 255;
          } else {
            let rand = p.random(1);
            if (Math.floor(bright * 100) % 3 == 1) {
              // Gosh, we could make fancy colors here if we wanted
              p.pixels[pix + 0] = 0;
              p.pixels[pix + 1] = 188;
              p.pixels[pix + 2] = 214;
            } else if (Math.floor(bright) % 3 == 0) {
              p.pixels[pix + 0] = 255;
              p.pixels[pix + 1] = 255;
              p.pixels[pix + 2] = 0;
            } else {
              p.pixels[pix + 0] = 255;
              p.pixels[pix + 1] = 0;
              p.pixels[pix + 2] = 0;
            }
            p.pixels[pix + 3] = 128;
          }
        }
        x += dx;
      }
      y += dy;
    }
    p.updatePixels();
  }
}
new p5(sketch, 'container');
