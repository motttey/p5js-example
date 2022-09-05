let sketch = function(p) {
    let img1, img2;
    let circleMask;

    p.setup = function(){
        p.loadImage('./internetdora.jpg', function(ret){
            img1 = ret;
            img2 = ret;

            p.image(img2, 0, 0);
            p.filter(p.GRAY);

            circleMask = p.createGraphics(128, 128);

            // (x1, y1),  (x2, y2),  (x3, y3)
            circleMask.triangle(
                p.random(0, 30),
                p.random(60, 75),
                p.random(50, 80),
                p.random(0, 30),
                p.random(100, 130),
                p.random(90, 120)
            );
            img1.mask(circleMask);

            p.image(img1, 0, 0);
        });
        
        p.createCanvas(1000, 1000);
        p.background(255,255,255);
    };
};
new p5(sketch, 'container');
  