console.log("Script started");
var video = document.getElementById("videoframe");
var source = document.getElementById("videosource");
var videodir="videos/";
var extension=".mp4";
var highestVideoNumber=3;
var lastVideo=-1;
function playPause() {
if (video.paused)
  video.play();
else
  video.pause();
}

function generateRandomNumberDifferentFromLastOne() {
//Generates numbers from 0 - (highestVideoNumber-1) so we add 1
var random=lastVideo;
do {
random= Math.floor(Math.random() * highestVideoNumber)+1;
} while (random===lastVideo);
console.log("random:"+random+" last:"+lastVideo);
lastVideo=random;
return random;
}

function loadRandomVideoAndPlay(random) {
var newvideo=videodir+random+extension;
console.log(newvideo);
  video.pause();
  source.setAttribute('src', newvideo);
  video.load();
  //videocontainer.setAttribute('poster', newposter); //Changes video poster image
  video.play();
}

document.addEventListener("keypress", function(event) {
if (event.keyCode == 13) { //Enter Key
  var random=generateRandomNumberDifferentFromLastOne();
    loadRandomVideoAndPlay(random);
}
})
