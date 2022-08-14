sound = "";
objects = [];

function preload() {
    sound = loadSound("army_trumpet_loud.mp3");
}

function setup() {
    canvas = createCanvas(380, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    status = true;
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    for (i = 0; i < objects.length; i++) {
    if (objects[i].label = "person") {
      document.getElementById("status").innerHTML = "baby detected";
      sound.stop();
    }
    else {
        document.getElementById("status").innerHTML = "baby not detected";
        sound.start();
    }

    if (objects[i].length < 0) {
        document.getElementById("status").innerHTML = "baby not detected";
        sound.start();
    }
}
}