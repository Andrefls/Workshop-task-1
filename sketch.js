let y = 10;
let x = 10;
let d = 10;
let ymove = 10;
let xmove = 10;
let explosion = false;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0, 0, 0);
  if (y > height) {
    ymove = -50;
    d = d + 15;
  }
  
  if (y < 0) {
    ymove = 50;
    d = d + 15;
    if (d > width / 2) {
      explosion = true;
    }
  }

   if (!explosion) {
    for (let i = 20; i < width; i += 80) {
      littlecirclesred(i, y, d);
      littlecirclesgreen(i + 20, y, d);
      littlecirclesblue(i + 40, y, d);
    }
  } else {
    for (let i = 20; i < width; i += 80) {
      littlecirclesredExplosion(i + 10, y, d);
      littlecirclesgreenExplosion(i + 20, y, d);
      littlecirclesblueExplosion(i + 30, y, d);
    }
  }
  y = y + ymove;

}

function littlecirclesred(x, y, d,) {
  fill (255, 0, 0);
  noStroke();
  ellipse (x, y, d, d);
}

function littlecirclesgreen(x, y, d) {
  fill(0, 255, 0);
  noStroke();
  ellipse (x, y, d, d);
}

function littlecirclesblue(x, y, d) {
  fill(0, 0, 255);
  noStroke(0);
  ellipse (x, y, d, d);
}

function littlecirclesredExplosion (x, y, d) {
  fill (255, 0, 0);
  noStroke ();
  for (let i = 0; i < 10; i++) {
    ellipse (x + random (-20, 20), y + random (-20,20), random (1, 5), random (1, 5));
  }
}

function littlecirclesgreenExplosion (x, y, d) {
  fill (0, 255, 0);
  noStroke ();
  for (let i = 0; i < 10; i++) {
    ellipse (x + random (-20, 20), y + random (-20,20), random (1, 5), random (1, 5));
  }
}

function littlecirclesblueExplosion (x, y, d) {
  fill (0, 0, 255);
  noStroke ();
  for (let i = 0; i < 10; i++) {
    ellipse (x + random (-20, 20), y + random (-20,20), random (1, 5), random (1, 5));
  }
}
  