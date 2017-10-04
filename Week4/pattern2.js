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
  x: window.innerWidth || document.body.clientWidth,
  y: window.innerHeight || document.body.clientHeight
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
  createCanvas(browserSize.x, browserSize.y);
//  noStroke();
  background(offBlack);
}

function draw(){
  tenPrint();
  //dotMoons();
}
