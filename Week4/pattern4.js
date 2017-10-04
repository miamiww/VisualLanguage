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

var x = 0;
var y = 0;

var browserSize = {
  x: 400,
  y: 400
}


function tenPrint(){

  if (random(1) > 0.5) {
    stroke(brightGold);
    line(x, y, x-20, y+20);
    fill(offPink);
    if(random(1)>0.5){
      ellipse(x,y,10,10);
    }
  }
  else {
    stroke(brightGrey);
    line(x, y-20, x+20, y);
    fill(brightTan);
    if(random(1)>0.5){
      ellipse(x,y,10,10);
    }
  }

  x += 20;
  if (x > browserSize.x) {
    x = 0;
    y += 20;
  }

}





function setup() {
  createCanvas(400, 400);
//  noStroke();
}

function draw(){
//  tenPrint();
  //dotMoons();
  strokeWeight(0);
  strokeCap(SQUARE);
  stroke(offBlack);
  background(brightBlue);
  fill(brightTan);
  arc(200, 200, 225, 225, PI/4, 1.75*PI, CHORD);
  strokeWeight(10);
  arc(200, 200, 175, 175, PI/4, 1.75*PI);
  fill(offPink);
  arc(200, 200, 125, 125, PI/4, 1.75*PI);
}
