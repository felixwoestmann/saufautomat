//Constants
const videodir = "videos/";
const extension = ".mp4";
const thumbnail = "thumbnail.png";
const highestVideoNumber = 6;
const numberOfRecentVideos = 3;
//Variables
var lastVideos = new Array();
var video = document.getElementById("videoframe");
var source = document.getElementById("videosource");

function generateRandomNumberDifferentFromRecentVideos() {
  //Generates numbers from 0 - (highestVideoNumber-1) so we add 1
  var random = -1;
  do {
    random = Math.floor(Math.random() * highestVideoNumber) + 1;
  } while (lastVideos.includes(random));
  addRecentVideoToArray(random);
  return random;
}

function loadVideo(filename) {
  var newvideo = videodir + filename + extension;
  video.pause();
  source.setAttribute('src', newvideo);
  video.load();
}

function addRecentVideoToArray(recentvideo) {
  if (lastVideos.length >= numberOfRecentVideos) {
    lastVideos.shift();
  }
  lastVideos.push(recentvideo);
}

video.onended = function() {
  setUpVideo();
};

function setUpVideo() {
  //Ist das aktuelle Video geendet, so suche ein neues aus und bereite es vor
  var random = generateRandomNumberDifferentFromRecentVideos();
  console.log(lastVideos.toString());
  loadVideo(random);
}
document.addEventListener("keypress", function(event) {
  //Only take keypresses, when video is fully prepared
  if (video.readyState == 4) {
    if (event.keyCode == 13) { //Enter Key
      video.play();

    }
  }

})
//TODO
// Fit Screen Size
// Show thumbnail again after video is finished
