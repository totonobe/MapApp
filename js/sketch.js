function setup(){
    var canvas = createCanvas(50, 50, WEBGL);
    canvas.parent("p5Canvas1");
  }

  function draw(){  
    background(153);
    translate(0,0,0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.0);
    rotateX(frameCount * 0.003);
    rotateY(frameCount * 0.015);
    box(24, 24, 24);
  }