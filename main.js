function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 100, 0, 640, 500);
}

function takSnapshot()
{
    save('newImage.png');
}