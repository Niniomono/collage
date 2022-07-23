var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
 function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function run (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
textbox.innerHTML = Content;

if (Content == "Toma mi selfie") {
    console.log("tomando selfie --- ");
        speak();
}
function speak(){

setTimeout(function()
    { 
       img_id = "selfie1";
       take_selfie();
       speak_data = "Tomando la siguien selfie en 10 segundos";
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       Synth.speak(utterThis)
    }, 5000);
 }


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {

    if(img_id == "pic1") {
        document.getElementById("result1").innerHTML = '<img id="pic1" src="'+data_uri+'"/>';
    }
    if(img_id == "pic2") {
        document.getElementById("result2").innerHTML = '<img id="pic2" src="'+data_uri+'"/>';
    }
    if(img_id == "pic3") {
        document.getElementById("result3").innerHTML = '<img id="pic3" src="'+data_uri+'"/>';
    }
});

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
} 
}
}