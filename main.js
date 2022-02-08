var previous_result = ""

// seperation :)

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelloaded);
}
function draw() {
 image(video,0,0,300,300)  
  classifier.classify(video, gotResult)
}
function modelloaded() {
  console.log("MobileNet Initialized")
}
function gotResult(error, result) {
  if(error) {
    console.error(error)
  }
  else {
    console.log(result)
    var synth = window.speechSynthesis 
    speak_data = "Object Detected Is" + result[0].label
    var utter = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter)
    document.getElementById("resultobject").innerHTML = result[0].label
    document.getElementById("resultaccuracy").innerHTML = result[0].confidence.toFixed(3)
    
  }
}