//https://teachablemachine.withgoogle.com/models/cVf1768tT/
function preload(){}

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cVf1768tT/model.json",modelloaded);
}
function modelloaded(){
    console.log("Model Loaded");
}

function draw() {
    image(video,0,0,600,600); 
    classifier.classify(video,getresult);
}
function getresult(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("member_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
   }