image = "";

function preload() {
  image = loadImage('dog_cat.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function draw() {
  image(image, 0, 0, 640, 420);
  fill("red");
  stroke("black");
  text("dog", 45,75);
  noFill();
  rect(30,60,450,350);
}