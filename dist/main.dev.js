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
moleAll.forEach(function (element) {
  return element.classList.add("active");
});

var incrementScore = function incrementScore() {
  count += 1;
  scoreDisplay.innerHTML = count;
};

var removeActive = function removeActive() {
  moleAll.forEach(function (element) {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
};

var gameStart = function gameStart() {
  startButton.classList.remove("active");
  setInterval(function () {
    var randNum = Math.floor(Math.random() * 10 + 1);

    if (randNum === 1) {
      removeActive();
      moleOne.setAttribute("class", "mole-1 mole active");
    }

    if (randNum === 2) {
      removeActive();
      moleTwo.setAttribute("class", "mole-2 mole active");
    }

    if (randNum === 3) {
      removeActive();
      moleThree.setAttribute("class", "mole-3 mole active");
    }

    if (randNum === 4) {
      removeActive();
      moleFour.setAttribute("class", "mole-4 mole active");
    }

    if (randNum === 5) {
      removeActive();
      moleFive.setAttribute("class", "mole-5 mole active");
    }

    if (randNum === 6) {
      removeActive();
      moleSix.setAttribute("class", "mole-6 mole active");
    }

    if (randNum === 7) {
      removeActive();
      moleSeven.setAttribute("class", "mole-7 mole active");
    }

    if (randNum === 8) {
      removeActive();
      moleEight.setAttribute("class", "mole-8 mole active");
    }

    if (randNum === 9) {
      removeActive();
      moleNine.setAttribute("class", "mole-9 mole active");
    }

    console.log(randNum);
  }, 1000);
};

moleOne.addEventListener("click", incrementScore);
moleTwo.addEventListener("click", incrementScore);
moleThree.addEventListener("click", incrementScore);
moleFour.addEventListener("click", incrementScore);
moleFive.addEventListener("click", incrementScore);
moleSix.addEventListener("click", incrementScore);
moleSeven.addEventListener("click", incrementScore);
moleEight.addEventListener("click", incrementScore);
moleNine.addEventListener("click", incrementScore);
startButton.addEventListener("click", gameStart);