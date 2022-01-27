//Naruto Is One Of The Biggest Selling Manga Titles In The World
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(660,143);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("MODEL LOADED (TRUE)");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}