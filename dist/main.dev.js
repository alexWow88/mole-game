"use strict";

// Random number generator to pull which phrase will be on screen
//depending on which random number, different grid?array will be input (phrase). will need separate styling 
//operator to have 6 guess. must receive inputs via keyboard input
// unhide numbers if correctly guessed.
// incorrect guessed, add to list display and add to counter
// if all letters have been correctly guessed, 
//timer to count down to zero
//randomly set a button to active (show mole)
//log a point when mole is clicked and deactivate button
//// when timer is out, display score
var startButton = document.querySelector(".start__button");
var moleOne = document.querySelector(".mole-1");
var moleTwo = document.querySelector(".mole-2");
var moleThree = document.querySelector(".mole-3");
var moleFour = document.querySelector(".mole-4");
var moleFive = document.querySelector(".mole-5");
var moleSix = document.querySelector(".mole-6");
var moleSeven = document.querySelector(".mole-7");
var moleEight = document.querySelector(".mole-8");
var moleNine = document.querySelector(".mole-9");
var moleTen = document.querySelector(".mole-10");
var moleAll = document.querySelectorAll(".mole");
var scoreDisplay = document.querySelector(".score__display__result");
var count = 0;

var scoreAcc = function scoreAcc() {
  count += 1;
  scoreDisplay.innerHTML = count;
};

var gameStart = function gameStart() {
  setInterval(function () {
    var randNum = Math.floor(Math.random() * 10 + 1);

    if (randNum === 1) {
      moleOne.setAttribute("class", "mole-1 mole active");
    }

    if (randNum === 2) {
      moleTwo.setAttribute("class", "mole-2 mole active");
    }

    if (randNum === 3) {
      moleThree.setAttribute("class", "mole-3 mole active");
    }

    console.log(randNum);
  }, 1000);
};

moleOne.addEventListener("click", function () {
  scoreAcc();
});
moleTwo.addEventListener("click", function () {
  scoreAcc();
});
moleThree.addEventListener("click", function () {
  scoreAcc();
});
moleFour.addEventListener("click", function () {
  scoreAcc();
});
moleFive.addEventListener("click", function () {
  scoreAcc();
});
moleSix.addEventListener("click", function () {
  scoreAcc();
});
moleSeven.addEventListener("click", function () {
  scoreAcc();
});
moleEight.addEventListener("click", function () {
  scoreAcc();
});
moleNine.addEventListener("click", function () {
  scoreAcc();
});
startButton.addEventListener("click", function () {
  gameStart();
});