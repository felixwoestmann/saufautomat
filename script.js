//Constants
const PICDIR = "pictures/";
const EXTENSION = ".jpg";
const HIGHESTPICNR = 11;
const MAXTIMESDISPLAY=5;

//Variables
var pic_counter = new Array(HIGHESTPICNR);
var img_container = document.getElementById("img_container");

function init() {
  initPicCounter();
}

function initPicCounter() {
  console.log(pic_counter)
  var i;
  for (i = 0; i < pic_counter.length; i++) {
    pic_counter[i]=0;
  }
}

function generateRandomNumberWithoutViolatingMaxTimesDisplay() {
  //Generates numbers from 0 - (highestpicnr-1) so we add 1
  var random = -1;
  do {
    random = Math.floor(Math.random() * HIGHESTPICNR) + 1;
  } while (pic_counter[random-1]>=MAXTIMESDISPLAY);
  pic_counter[random-1] += 1;
  return random;
}




function chooseAndDisplayImage() {
  //Choose
  var filenr=generateRandomNumberWithoutViolatingMaxTimesDisplay();
  var new_img=PICDIR+filenr+EXTENSION;
  console.log(pic_counter);
  //SET
  img_container.setAttribute("src",new_img);
}

document.addEventListener("keypress", function(event) {
  //Only take keypresses, when video is fully prepared

    if (event.keyCode == 13) { //Enter Key
      chooseAndDisplayImage();
  }

})

