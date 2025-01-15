Link to the website: https://andrefls.github.io/Workshop-task-1/

Synopsis

- After completing Workshop Task 0, I am eager to apply what I've learned to Workshop 1.
- Initially, I wanted to make the circles bounce back and change their colors.
- I have watched the Workshop 1 video repeatedly at https://canvas.auckland.ac.nz/courses/121821/pages/week-1-overview?module_item_id=2435967.
- However, after reviewing the synopsis of Task 1, I changed my mind and now I want to make the circles explode.


Summary/Problem-solving

- I realized that by using the following code, I could create a limit that allowed the circles to bounce back:

```javascript
function draw() { 
    background(0, 0, 0); 
    if (y > height) { 
        ymove = -50; 
        d = d + 15; 
    } 
}
```
- However, after implementing this, a problem arose: I couldn't stop the circles from bouncing. The main issue was that I had never used code to create anything before, and creating something like this with code felt almost impossible.
- At this stage, I didn't know how to implement particles in my code, so I needed to find a different solution.
- Transforming the circles seemed like a potential answer, so I revisited https://p5js.org/tutorials/coordinates-and-transformations/ to explore possible solutions.
- I attempted to implement transformations, turning circles into smaller circles, but I became frustrated because the examples in the p5.js references didn’t work as expected. A lot of errors.
- After more research, I found a way to enlarge the circles with movement; the syntax came from https://p5js.org/reference/p5/scale/.

<img width="1118" alt="Sintax" src="https://github.com/user-attachments/assets/810663b2-c34a-4031-b7bd-f698b98eb7d8" />

  
- I then considered using particles and looked for examples on the following pages: https://editor.p5js.org/Pole/sketches/5PG2h7-0l and https://editor.p5js.org/pedroalahr/sketches/tz0Ck-QZz.
- My goal was to create an explosion, but I felt overwhelmed and uncertain about how to achieve it.
- Nonetheless, my reading led to some productive experiments. For instance, I realized that to create an explosion, I would need a geometric shape that resembled a circle but could transform into smaller particles.
- So I tried the arc

<img width="1023" alt="Circle explode Try" src="https://github.com/user-attachments/assets/0a6e129c-f09c-4389-977e-e0c65791a7ee" />

- So, I discovered the ellipse shape through https://p5js.org/reference/p5/ellipse/.
- After creating an ellipse within the explosion function, I encountered numerous errors.
- As a last resort, I tried to use ChatGPT but to be honest, I feel a bit out of my depth with this AI technology; my closest experience has been with Meta on WhatsApp.

- So, I have asked Meta

- "Can you show me a function where the circles explodes at y > height using an ellipse” and
- I paste my coding

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
}
```
_________________________________________________________________________________
- Meta reply below: (spanish language as it looks like my Meta is in Spanish)`

```¡Claro! Aquí te presento la versión```
```function Explosion(x, y, d) {
  fill(0, 255, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(x + random(-20, 20), y + random(-20, 20), random(1, 5), random(1, 5));
  }
}```

Espero que esto te ayude. ¡Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar!
___________________________________________________________________________________

'
- Based on the function created by Meta, I attempted to implement it in my p5.js code, but encountered issues due to differing values. Following our lecture's advice, I realized that I needed to understand this function rather than simply use it.
- My first question was about the use of the exclamation mark (!) before the word "explosion."
- After conducting some research https://www.reddit.com/r/JavaScriptTips/comments/131tnep/use_of_exclamation_mark_after_variable_in/?rdt=63808, I discovered that the exclamation mark was serving to make the explosion false, which was necessary since I didn't want the explosion to occur before the first bounce.

<img width="766" alt="Exclamation" src="https://github.com/user-attachments/assets/88799503-3354-41e3-a3b9-84efc30c4afc" />


- I then watched the workshop video at https://canvas.auckland.ac.nz/courses/121821/pages/week-1-overview?module_item_id=2435967 and experimented with random values for the ellipse shape.
- However, I didn't see any changes. After reviewing information on random values https://p5js.org/reference/p5/random/, I understood that I needed both positive and negative values. This would create a sense of chaos, blending random increasing and decreasing scales to give the illusion of particles.
- I spent nearly an entire afternoon working through various errors in p5.js, but ultimately,
- I succeeded in creating an explosion using basic coding techniques.

Future development

- Now the problems persist as I don't know how to reset the explosion back to the starting position. For my next workshop, I will try to stop the explosion and restart it again.

Conclusion

- This has been the most challenging task I've faced while learning a new language. In fact, I am still in the process of learning.
- I'm happy that I succeeded with the explosion, but I must admit that I'm still not completely satisfied with it. I hope that by the time I finish this course, I will be able to create some cool art on the screen
