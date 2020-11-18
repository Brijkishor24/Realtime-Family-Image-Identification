//https://teachablemachine.withgoogle.com/models/cVf1768tT/
function preload(){}

function setup(){
    canvas=createCanvas(700,800);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,15,300,700,800);
}