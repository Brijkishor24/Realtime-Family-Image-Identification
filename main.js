//https://teachablemachine.withgoogle.com/models/cVf1768tT/
function preload(){}

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,600);
}