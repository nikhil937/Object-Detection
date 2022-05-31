img = "";
status = "";

function preload() {
  img = loadImage('dog_cat.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();

  objectDetection = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelLoaded(){
  console.log("modelLoaded");
  status = true;
  objectDetection.detect(img, gotResult);
}

function gotResult(error,results){
  if(error){
    console.error(error);
  }
    console.log(results); 
  
}

function draw() {
  image(img, 0, 0, 640, 420);
  fill("red");
  noFill();
  stroke("red");
  text("dog", 45,75);
  rect(30,60,450,350);

  fill("red");
  noFill();
  stroke("red");
  text("cat",320,110);
  rect(300,80,270,210);
}