img="";
stats= "";
objects=[];

function preload()
{
img= loadImage("dog_cat.jpg")
}

function setup()
{
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function draw()
{
    image(img,0,0,640,420)
    if(stats!="")
    {
        for (i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Detected Objects"
            fill("#0000FF")
            percent=floor(objects[i].confidence*100)
            text(objects[i].label + " " + percent+ "%", objects[i].x+10,objects[i].y+20)
            noFill()
            stroke("#0000FF")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}

function modelloaded()
{
    console.log('model is initialized')
    stats=true
    objectDetector.detect(img,gotResults)
    
}
function gotResults(error,results)
{
    if (error)
    {
    console.error(error)
    }
    console.log(results)
    objects=results;
}
