Link to the website: https://andrefls.github.io/Workshop-task-1/

# Workshop-task-1
Task 1
- My idea was to complete the task 1 by fixing the problems I had in task 0.
- I wanted the circles to have different colours and to bounce back.
- I repeatedly watch the workshop 1 video at https://canvas.auckland.ac.nz/courses/121821/pages/week-1-overview?module_item_id=2435967
- I realised that creating a limit using coding below: 
function draw() {
background(0, 0, 0);
if (y > height) {
ymove = -50;
d = d + 15;
will allow me make the circles bouncing back.
- However after doing this, a problem arised. I could not stop the circles from bouncing.
- So, after watching the video workshop 1 couple of times more, and knowing that the task for this workshop 1 was creating a function and loops using different shapes, I changed my mind about bouncing back.
- Now, I wanted the circles explode.
- The problem was, I have never use codes to make anything and making something like an explosion using codes could be a very difficult job, almost impossible.
- To make it clear, I dont know how to implement particles using coding so I need a different solution.
- Transforming could be the one
- So, I looked at https://p5js.org/tutorials/coordinates-and-transformations/ as a solution.
- I tried to implement trasnformation, circles into little circles but, I got frustrated as the example in p5.js references did not work.
- After watching some references on the internet, I got some new knowdge and what could be the solution. Creating a function where other shape can have different little sizes so it will look like an explosion (particles)
- https://editor.p5js.org/Pole/sketches/5PG2h7-0l
- https://editor.p5js.org/pedroalahr/sketches/tz0Ck-QZz
- at this stage, still looking a bit complex but now I have earned new knowldge
- I dont have ChatGPT, in fact I have never use it. So, I saw what's app has Meta to ask questions.
- I asked Meta, how could I use my code which I designed to create a simple explosion using another geometry.
- This was how I asked Meta
  
- ```"Can you show me a function where the circles explodes at y>height using an ellipse"```
- I paste my code.
```
let y = 5;
let x = 5;
let d = 5;
let xred = 20;
let xgreen = 100;
let xblue = 180;
let yredmove = 0;
let ygreenmove = 0;
let ybluemove = 0;
let ymove = 10;
let xmove = 10;

function setup() {
  createCanvas(400, 200);
}
function draw() {
  background(0, 0, 0);
  if (y > height) {
    ymove = -50;
    d = d + 10;
    background(255, 255, 255);
  }
  if (y < 0) {
    ymove = 50;
    d = d + 10;
    background(255, 255, 255);
    if (d > width / 2) {
      d = 0;
    }
  }
  for (x = 20; x < width; x += 40) {
    littlecirclesred();
  }
  for (x = 20; x < width; x += 40) {
    littlecirclesgreen();
  }
  for (x = 20; x < width; x += 40) {
    littlecirclesblue();
  }
  y = y + ymove;
  x = x + xmove;
}
function littlecirclesred(xred, ypos, dsize) {
  circle(100, (y = yredmove + y), (dsize = d));
  stroke(0);
  fill(255, 0, 0);
  loop();
}
function littlecirclesgreen(xgreen, ypos, dsize) {
  circle(200, (y = ygreenmove + y), (dsize = d));
  stroke(0);
  fill(0, 255, 0);
  loop ();
}
function littlecirclesblue(xblue, ypos, dsize) {
  circle(300, (y = ybluemove + y), (dsize = d));
  stroke(0);
  fill(0, 0, 255);
  loop();
} ```

`- Meta reply below: (spanish language as it looks like my Meta is in Spanish)`

```¡Claro! Aquí te presento la versión```

```function Explosion(x, y, d) {
  fill(0, 255, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(x + random(-20, 20), y + random(-20, 20), random(1, 5), random(1, 5));
  }
}
```

```Espero que esto te ayude. ¡Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar!```


___________________________________________________________________________________
- Based on the function Meta created, I tried to use on my p5.js coding, However, it did not go well as my values where different.
- I realised that Meta have use an ellipse to randomly changed the scales.
- So I went to see the workshop 1 video again, and then I combined the examples where the lecture use random values, and adding a explosion function where the ellipse was the new shape.
- I tried for almost an entire afternoon, and after so many errors in p5.js, I got it to work. I created an explosion using basic coding.
- Now, the problems persist as I dont know how to reset the explosion back to the starting position. So for my next workshop, I will try to stop the explosion and re start again.
