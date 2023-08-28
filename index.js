var btn = document.querySelectorAll(".drum");
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");
var kick = new Audio("./sounds/kick-bass.mp3");
var snare = new Audio("./sounds/snare.mp3");
var crash = new Audio("./sounds/crash.mp3");

function sound(key) {
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      kick.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      snare.play();
      break;
    default:
  }
}

function animation(currentKey) {
  var button = document.querySelector("." + currentKey);
  button.classList.add("pressed");
  setTimeout(function() { button.classList.remove("pressed"); }, 100);
}
var noOfButtons = btn.length;
i = 0;
while (i < noOfButtons) {
  btn[i].addEventListener("click", function() {
    var buttonHTML = this.innerHTML;
    sound(buttonHTML)
    animation(buttonHTML);
  });
  document.addEventListener("keydown", function(event) {
    sound(event.key);
    animation(event.key);
  })
  i++;
}