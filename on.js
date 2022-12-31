img = " ";
objects = [];
modelStatus = " ";


function preload(){
  music = loadSound('new_years_song.mp3')
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();


}
function draw() {
  image(video, 0, 0, 380, 380);
  
  if(modelStatus != "")
  {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status1").innerHTML = "Status: Objeto Detectado";

        
        if(objects[0].label == "person"){
          document.getElementById("status1").innerHTML = "Status: Achei O Bebe";

          document.getElementById("play").innerHTML = "trecos "+objects.length;
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        else{
          music.play();
        }
      

      
    }
  }
}

function modelLoaded() {
    console.log("BASKAHA")
    modelStatus = true;
    objectDetector.detect(video, gotResult);

    
}
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
  
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detectando Objetos"
}