var myCanvas;
//These are the variables for the paragraphs
var p0;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
//These are the veriables referd to the elements that can change their color
var bgColor;
var textColor;
var strokeColor;
//These are the variables for the buttons, the sliders and the inputs that the user will enter
var myInput1;
var myInput2;
var buttonCol;
var buttonBg;
var buttonStrokeCol;
var buttonPrint;
var sliderStr;
var sliderDim;
var sliderDim2;
var part1;
var part2;
//series of arrays (colors, Firrstname and Surname)
var colorList = ['black', 'white', 'blue', 'cyan', 'pink', 'magenta', 'purple', 'violet', 'aquamarine', 'blueviolet', 'royalblue'];
var dayList = ['', 'SAMSUNG', 'LIL', 'SENPAI', 'PEPSI', 'SUMMER', 'GAMEBOY', 'PIKACHU', 'VIRTUAL', 'ARIZONA', 'BLANK',
               'MACINTOSH', 'SUNSET', '美的', 'LEGOSHI', 'MEGADRIVE', 'DREAM', 'SAINT', 'MOON', 'WINDOWS 95', '失われた',
               'OLOGRAPHIC', 'DIGITAL', 'USAGI', 'YUNG', 'ANDROID', 'NEOTOKYO', 'STEREO', 'SHINJI', 'EVA-01', 'HENTAI', 'GODZILLA'];
var monthList = ['', 'Discette', 'Deluxe Edition', '1994', 'Plus', 'Hotline', 'System', 'ウルトラ', '.jpg', 'Boi', 'バカ', 'Power', 'Atari'];


function preload(){
}

function setup() {
//This is the canvas in which the elements can change.
  myCanvas = createCanvas(1465, 450);
  myCanvas.position(20, 90);
//These are the paragraphs refered to the modifiers placed under the canvas
  p0 = createP("Day you were born:");
  p0.position(40, 560);
  myInput1 = createInput("");
  myInput1.position(40, 620);

  p1 = createP("Month you were born:");
  p1.position(40, 662);
  myInput2 = createInput("");
  myInput2.position(40, 726);

  p2 = createP("Choose your color:");
  p2.position(300, 560);
//Button that change text color
  buttonCol = createButton('CHANGE!');
  buttonCol.position(310, 620);
  textColor = color('white');
  buttonCol.mousePressed(changeTextCol);

  p3 = createP("Choose stroke color:");
  p3.position(300, 662);
//Button that change stoke color
  buttonStrokeCol = createButton('CHANGE!');
  buttonStrokeCol.position(310, 726);
  strokeColor = color('black');
  buttonStrokeCol.mousePressed(changeStrokeCol);

  p4 = createP("Choose stroke weight:");
  p4.position(510, 560);
//Slider that change the weight of the stroke
  sliderStr = createSlider(0, 20, 1);
  sliderStr.position(520, 620);
  sliderStr.size(110);

  p5 = createP("Try on some backgrounds:");
  p5.position(740, 560);
//Button that change background color
  buttonBg = createButton('CHANGE!');
  buttonBg.position(765, 620);
  bgColor = color('white');
  buttonBg.mousePressed(changeBgCol);

  p6 = createP("Change first name size");
  p6.position(990, 560);
//Slider that change the size of the First name
  sliderDim = createSlider(20, 220, 20);
  sliderDim.position(990, 620);
  sliderDim.size(170);

  p7 = createP("Change surname size");
  p7.position(990, 662);
//Slider that change the size of the surname
  sliderDim2 = createSlider(20, 250, 20);
  sliderDim2.position(990, 730);
  sliderDim2.size(170);

  p8 = createP("Save your Vaporwave name");
  p8.position(1250, 560);

  buttonPrint = createButton('SAVE');
  buttonPrint.position(1270, 620);
  buttonPrint.mousePressed(printCanvas);
}
//Series of functions that deserve to change the colors of the different elements when
//the user press a button
function changeTextCol () {
  textColor = color(random(colorList));
}

function changeStrokeCol () {
  strokeColor = color(random(colorList))
}

function changeBgCol () {
  bgColor = color(random(colorList));
}
//Inside the function draw are collocated the elements that appear on itself
function draw() {
  background(bgColor);

  push();
  fill (textColor);
  strokeWeight (sliderStr.value());
  stroke (strokeColor);
  textFont('Orbitron');
  textSize (sliderDim.value());
  textAlign (CENTER);
  text (part1, width/2, 250);
  var x = myInput1.value();
  part1 = dayList[x];
  pop();

  push();
  fill (textColor);
  strokeWeight (sliderStr.value());
  stroke (strokeColor);
  textFont('Sedgwick Ave');
  textSize (sliderDim2.value());
  textAlign (CENTER);
  text (part2, width/2, 330);
  var y = myInput2.value();
  part2 = monthList[y]; //testo digitato
  pop();
}
//Function which allows to save as a jpg file the Canvas and what appear inside of itself
function printCanvas() {
  print('Print');
  saveCanvas(myCanvas, 'Vaporwave Name', 'jpg');
}
