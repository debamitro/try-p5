var mic;
var mic_on = false;
function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();  
}

function draw() {
  micLevel = mic.getLevel();
  $('#meter').text('level: ' + micLevel);
  
  background(255);
  
  // hair
  fill(0);
  arc(200,220,190,240,PI-QUARTER_PI/2,PI+HALF_PI);
  arc(200,220,190,240,PI+HALF_PI,QUARTER_PI/2);
  
  // the ears  
  fill(200,175,175);
  ellipse(120,200,15,40);
  ellipse(280,200,15,40);
  
  // the face 
  ellipse(200,200,150,180);  
  
  // more hair
  fill(0);
  arc(150,120,110,60,TWO_PI-QUARTER_PI/2,HALF_PI+QUARTER_PI/2);
  arc(250,120,110,60,HALF_PI-QUARTER_PI/2,PI+QUARTER_PI/2);  
  
  // eyes
  fill(255);
  ellipse(160,180,30,15);
  ellipse(240,180,30,15);
  
  // eyeballs
  fill(0);
  ellipse(160,180,15,15);
  ellipse(240,180,15,15);
  fill(255);
  ellipse(165,182,5+micLevel*8,5+micLevel*8);
  ellipse(245,182,5+micLevel*8,5+micLevel*8);
  
  // the nose
  fill(220,200,200);
  triangle(200,180,190,220,210,220);
  
  // the mouth
  fill(0);
  ellipse(200,250,80,micLevel*100);
  //ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 30, 30);
}

$(function () {
  $('#start-stop').click(function () {
    if (mic_on) {
	  mic.stop();
	  mic_on = false;
	}
	else {
      mic.start();
	  mic_on = true;
	}
  });
});