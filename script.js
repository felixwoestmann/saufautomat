var video = document.getElementById("videoframe");
var source = document.getElementById("videosource");
var videodir="videos/";
var extension=".mp4";
var highestVideoNumber=6;
var lastVideos=new Array();
var numberOfRecentVideos=3;

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
if (event.keyCode == 13) { //Enter Key
  var random=generateRandomNumberDifferentFromRecentVideos();
  console.log(lastVideos.toString());
    loadVideoAndPlay(random);
}
})
//TODO
// Fit Screen Size
// Thumbnail with instruction!
// Queue for more diversity
