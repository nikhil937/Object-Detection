
status = "";
objects = [];

function preload() {

}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function start(){
  objectDetection = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelLoaded(){
  console.log("modelLoaded");
  status = true;
  objectDetection.detect(video, gotResult);
}

function gotResult(error,results){
  if(error){
    console.error(error);
  }
    console.log(results); 
  objects = results;
}

function draw() {
  image(video, 0, 0, 640, 420);

  if(status != " "){

    for(i = 0; i <= objects.length; i++){
      document.getElementById("status").innerHTML = "status:object detected";
      document.getElementById("numberofobjects").innerHTML = "Number of objects detected are:" + objects.length;

      r = random(255);
      g = random(255);
      b = random(255);

      fill(r,g,b);
      percent = Math.floor(objects[i].confidence * 100);
      noFill();
      stroke(r,g,b);
      text(objects[i].label + " " +percent + "%",objects[i].x + 15,objects[i].y + 15);
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }

  }
}