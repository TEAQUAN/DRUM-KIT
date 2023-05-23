let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    let buttonInner = this.innerHTML;
    console.log(buttonInner)
    buttonAnimation(buttonInner)

    switch (buttonInner) {
      case "w":
        let tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        let crashes = new Audio('./sounds/crash.mp3');
        crashes.play();
        break;

      case "k":
        let kicks = new Audio('./sounds/kick-bass.mp3');
        kicks.play();
        break;

      case "l":
        let snares = new Audio('./sounds/snare.mp3');
        snares.play();
        break;

      default: console.log(buttonInner);
    }

  }
 
};

document.addEventListener("keydown", function (e) {
  let listnr = e.key;
  console.log(listnr);
  buttonAnimation(listnr)
  switch (listnr) {
    case "w":
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let crashes = new Audio('./sounds/crash.mp3');
      crashes.play();
      break;

    case "k":
      let kicks = new Audio('./sounds/kick-bass.mp3');
      kicks.play();
      break;

    case "l":
      let snares = new Audio('./sounds/snare.mp3');
      snares.play();
      break;

    default: console.log(listnr);
  }
})


function buttonAnimation(currentKey) { 
 let activeButton = document.querySelector("." +currentKey)
 activeButton.classList.add("pressed");
 setTimeout(function() {
  activeButton.classList.remove("pressed");
 }, 100 );
}

// A CODE FOR A CALCULATOR
//  function multiply(num1,num2) {
//   return num1 * num2
//  }

// let audio = new Audio ('./sounds/crash.mp3');

// audio.play();
//  function Addition (num1,num2) {
//   return num1 + num2
//  }

//  function division (num1,num2) {
//   return num1/num2
//  }

//  function subtraction (num1,num2) {
//   return num1 - num2
//  }

//  function calculate (num1,num2,operator) {
//   return operator(num1,num2)
//  }

switch (key) {
  case value:

    break;

  default:
    break;
}