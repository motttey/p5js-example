let sketch = function(p) {
    let img1, img2;
    p.setup = function(){
        p.loadImage('./internetdora.jpg', function(ret){
            img1 = ret;
            img2 = ret;

            p.image(img2, 0, 0);
            p.filter(p.GRAY);

            circleMask = p.createGraphics(128, 128);
            circleMask.triangle(0, 75, 68, 20, 120, 108);
            img1.mask(circleMask);

            p.image(img1, 0, 0);
        });
        
        // createCanvas(600,425);
        p.createCanvas(1000, 1000);
        p.background(255,255,255);
    }
}
new p5(sketch, 'container');
  