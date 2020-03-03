//Constants
const PICDIR = "pictures/";
const EXTENSION = ".jpg";
const HIGHESTPICNR = 11;

//Variables
var pic_counter = new Array(HIGHESTPICNR);
var img_container = document.getElementById("img_container");


function generateRandomNumberDifferentFromRecentVideos() {
  //Generates numbers from 0 - (highestVideoNumber-1) so we add 1
  var random = -1;
  do {
    random = Math.floor(Math.random() * HIGHESTVIDEONR) + 1;
  } while (lastVideos.includes(random));
  addRecentVideoToArray(random);
  return random;
}

function loadVideo(filename) {
  var newvideo = VIDEODIR + filename + EXTENSION;
  video.pause();
  source.setAttribute('src', newvideo);
  video.load();
}



function chooseAndDisplayImage() {
  img_container.setAttribute("src","pictures/1.jpg");
}

document.addEventListener("keypress", function(event) {
  //Only take keypresses, when video is fully prepared

    if (event.keyCode == 13) { //Enter Key
      chooseAndDisplayImage();
  }

})

