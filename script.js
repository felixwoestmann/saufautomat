//Constants
const videodir="videos/";
const extension=".mp4";
const thumbnail="thumbnail.png";
const highestVideoNumber=6;
const numberOfRecentVideos=3;
//Variables
var lastVideos=new Array();
var video = document.getElementById("videoframe");
var source = document.getElementById("videosource");

function generateRandomNumberDifferentFromRecentVideos() {
//Generates numbers from 0 - (highestVideoNumber-1) so we add 1
var random=-1;
do {
random = Math.floor(Math.random() * highestVideoNumber)+1;
} while (lastVideos.includes(random));
addRecentVideoToArray(random);
return random;
}

function loadVideoAndPlay(filename) {
var newvideo=videodir+filename+extension;
  video.pause();
  source.setAttribute('src', newvideo);
  video.load();
  //videocontainer.setAttribute('poster', newposter); //Changes video poster image
  video.play();
}

function addRecentVideoToArray(recentvideo) {
  if(lastVideos.length>=numberOfRecentVideos) {
      lastVideos.shift();
  }
  lastVideos.push(recentvideo);
}



document.addEventListener("keypress", function(event) {
  //Video has ended won't work for the first pressed button
  //so use source as flag if we are at the first video or later ones
  var currentSource=source.getAttribute("src");
if(currentSource==null||video.ended) {
  if (event.keyCode == 13) { //Enter Key
    var random=generateRandomNumberDifferentFromRecentVideos();
    console.log(lastVideos.toString());
      loadVideoAndPlay(random);

}
}

})
//TODO
// Fit Screen Size
// Just take input when video is finished
