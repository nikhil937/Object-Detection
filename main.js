img = "";
status = "";
objects = [];

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
  objects = results;
}

function draw() {
  image(img, 0, 0, 640, 420);

  if(status != " "){

    for(i = 0; i <= objects.length; i++){
      document.getElementById("status").innerHTML = "status:object detected";

      fill("red");
      percent = floor(objects[i].confidence * 100);
      noFill();
      stroke("red");
      text(objects[i].label + " " +percent + "%",objects[i].x + 15,objects[i].y + 15);
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }

  }
}