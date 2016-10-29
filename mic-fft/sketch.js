var mic;
var mic_on = false;
var fft;
function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();  
  fft = new p5.FFT(0.5, 16);
  fft.setInput(mic);
}

function draw() {
  micLevel = mic.getLevel();
  var spectrum = fft.analyze();
  var meterTxt = "";
  console.log(spectrum);
  for (var i = 0; i < spectrum.length; i++) {
	  meterTxt += i  +  ': ' + spectrum[i] + '<br>';
  }
  $('#meter').html(meterTxt);
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