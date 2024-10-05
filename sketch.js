let sizes = [];
let cols = 20;
let rows = 20;
let size = 10;
let xOff = 0;
let yOff = 0;
let zOff = 0;
let inc = 0.1;

function setup() {
  createCanvas(400, 400, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  rotateX(-45);
  rotateY(45);

  xOff = 0;
  for (let i = 0; i < cols; i++) {
    sizes[i] = [];
    yOff = 0;
    for (let j = 0; j < rows; j++) {
      sizes[i][j] = map(noise(xOff, yOff, zOff), 0, 1, 0, 100);
      yOff += inc;
      let r = noise(zOff) * 255;
      let g = noise(zOff + 15) * 255;
      let b = noise(zOff + 30) * 255;
      fill(r, g, b);
      //noStroke();

      push();
      translate(i * size - 100, sizes[i][j], j * size - 100);
      box(size, 100, size);
      pop();

      // rect(size / 2 + i * size, size / 2 + j * size, sizes[i][j], sizes[i][j]);
    }
    xOff += inc;
    zOff += 0.0004;
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {}
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
