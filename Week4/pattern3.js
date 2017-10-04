//main colors
var brightBlue = [73,174,227];
var brightGold = [225,204,39];
var offPink = [233,71,126];
var brightTan = [248,208,162];
var brightGrey = [145,153,238];
//additional colors
var dullPink = [238,171,178];
var offBlack = [30,29,20];
var brightRed = [221,59,48];
var dullRed = [197,88,141];
var dullBlue = [163,213,217];

var shapeSize = 10;
var offSet = 3;

var buttonSize = 50;

var browserSize = {
  x: window.innerWidth || document.body.clientWidth,
  y: window.innerHeight || document.body.clientHeight
}

function dotMoons(){

  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(255,140,200);
      ellipse(x,y,shapeSize,shapeSize);

    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightBlue);
      ellipse(x+offSet,y-offSet,shapeSize,shapeSize);
    }
  }

}

function squarez(){
  for (var y=20; y<= height; y+=40){
    for (var x =20; x<= width; x += 40){
      fill(dullPink);
      rect(x-offSet,y-offSet,shapeSize,shapeSize);

    }
  }
  for (var y=20; y<= height; y+=40){
    for (var x =20; x<= width; x += 40){
      fill(brightGrey);
      rect(x,y,shapeSize,shapeSize);

    }
  }
}


function setup() {
  createCanvas(browserSize.x, browserSize.y);

}

function draw() {
  var center = {
    x: width/2,
    y: height/2
  }


  noStroke();

  if (dist(mouseX, mouseY, center.x, center.y) < buttonSize/2) {

    dotMoons();
    background(0);
    fill(255,140,200);
    ellipse(center.x-10, center.y+10, buttonSize, buttonSize);
    fill(brightBlue);
    ellipse(center.x, center.y, buttonSize, buttonSize);
    fill(255);
    text("fuck off",center.x,center.y);

  } else {

    background(brightTan);

    dotMoons();
    squarez();
  }
}
