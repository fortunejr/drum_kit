//Detecting button clicks
var btn = document.querySelectorAll(".drum");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    keyPressed(buttonInnerHtml);
    buttonanimations(buttonInnerHtml);

  });
}

//Detecting keyboard clicks
document.addEventListener('keydown', function(event) {
  keyPressed(event.key);
  buttonanimations(event.key)
})

function keyPressed(key) {
  switch (key) {
    case "w":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHtml);

  }
}
function buttonanimations(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100)
}
// exercise
//Can you make any random drum play by pressing any random key on thhekeybouard?
