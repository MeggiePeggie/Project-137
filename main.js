status1 = "";
object_status = "";
results = []
synth = window.speechSynthesis;

function preload()
{
    video = createCapture(VIDEO);
    video.hide();
    video.size(480, 480);
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 480);
    if(status1 = "")
    {
        objectDetector.dectect(video, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;

    if(objects[i].label == object_name)
    {
       //I'm very confused on how to get the variable name for the Webcam since there isn't a variable name for the Webcam (unless I did something wrong)
       objectDetector.detect(gotResult);
       document.getElementById("object_status").innerHTML = object_name + " found";
    }
    else
    {
        document.getElementById("object_status").innerHTML = object_name + " not found";
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status1 = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    
}

function SpeechSynthesisUtterance()
{
    utterThis = new SpeechSynthesisUtterance(object_status + " found");
    synth.speak();
    utterThis();
}