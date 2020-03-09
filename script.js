//Constants
const PICTURE_DIRECTORY = "pictures/";
const FILE_EXTENSION = "_500px.jpg";
const HIGHEST_PICTURE = 11;
const MAX_TIMES_TO_DISPLAY = 9;

//Variables
var picture_display_counter = new Array(HIGHEST_PICTURE);
var img_container = document.getElementById("img_container");
var is_timeout_phased = true;

//Is called onLoad()
function init() {
  console.log("Initialized Site:");
  console.log("\tHIGHEST_PICTURE: " + HIGHEST_PICTURE);
  console.log("\tMAX_TIMES_TO_DISPLAY: " + MAX_TIMES_TO_DISPLAY);
  initPicCounter();
  console.log("\tInitalized picture_display_counter");
  console.log("\t" + picture_display_counter);
}

//Initalizes picture_display_counter with zeros
function initPicCounter() {
  var i;
  for (i = 0; i < picture_display_counter.length; i++) {
    picture_display_counter[i] = 0;
  }
}

function checkPictureCounter() {
  var i = 0;
  for (; i < picture_display_counter.length; i++) {
    if (picture_display_counter[i] < MAX_TIMES_TO_DISPLAY) {
      return true;
    }
  }
  return false;
}

function generateRandomNumberWithoutViolatingMaxTimesDisplay() {
  //Generates numbers from 0 - (highestpicnr-1) so we add 1
  var random = -1;
  do {
    random = Math.floor(Math.random() * HIGHEST_PICTURE) + 1;
  } while (picture_display_counter[random - 1] >= MAX_TIMES_TO_DISPLAY);
  picture_display_counter[random - 1] += 1;
  return random;
}

function chooseAndDisplayImage() {
  if (checkPictureCounter()) {
    console.log("\tpicture_display_counter has room left");
    //Choose
    var filenr = generateRandomNumberWithoutViolatingMaxTimesDisplay();
    console.log("\t" + picture_display_counter);
    var new_img = PICTURE_DIRECTORY + filenr + FILE_EXTENSION;
    //SET
    img_container.setAttribute("src", new_img);
  } else {
    console.log("\tpicture_display_counter has NO room left");
    console.log("\t" + picture_display_counter);
    console.log("\tDisplay Thumbnail");
    console.log("\n\nReload Required");
    alert("Seite muss neu geladen werden um sie zurückzusetzen!");
    img_container.setAttribute("src", "thumbnail.png");
  }
}

function invokeTimeout() {
  img_container.setAttribute("src", "thumbnail.png");
  is_timeout_phased = true;
}

document.addEventListener("keypress", function(event) {
  //Only take keypresses, when video is fully prepared
  if (event.keyCode == 13) {
    //Enter Key
    console.log("Enter Press detected:");
    if (is_timeout_phased) {
      is_timeout_phased = false;
      chooseAndDisplayImage();
      setTimeout(invokeTimeout, 1500);
    } else {
      console.log("\tWon't accept KeyPress due to timeout");
    }
  }
});
