// mouse click
var noOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("mouseover", function(){
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
    }
  );
}

// Keyboard Click
document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});


// Common Code
function makeSound(key){
  switch (key) {
    case 'q':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'w':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'e':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'r':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 't':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'y':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'u':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:

  }
}

function buttonAnimation(currentkey)
{
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");


  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
