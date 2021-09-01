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
var gameOverDisplay = document.querySelector(".gameover-display");
var gameOverScore = document.querySelector(".gameover-display__score");
var highScorestopFive = document.querySelector(".gameover-display__highscore-list");
var playerName = document.querySelector(".gameover-display__player__input");
var highScoreSubmit = document.querySelector(".gameover-display__player__submit");
var GoAgainButton = document.querySelector(".gameover-display__retry-button");
var bombOne = document.querySelector(".bomb-1");
var bombTwo = document.querySelector(".bomb-2");
var bombThree = document.querySelector(".bomb-3");
var bombFour = document.querySelector(".bomb-4");
var bombFive = document.querySelector(".bomb-5");
var bombSix = document.querySelector(".bomb-6");
var bombSeven = document.querySelector(".bomb-7");
var bombEight = document.querySelector(".bomb-8");
var bombNine = document.querySelector(".bomb-9");
var bombAll = document.querySelectorAll(".bomb");
var count = 0;
var timeOutTrigger = 0;
var topFive = [["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0]];
highScorestopFive.innerHTML = "\n<div>1.</div><div>".concat(topFive[0][0], "</div><div>").concat(topFive[0][1], "</div>\n<div>2.</div><div>").concat(topFive[1][0], "</div><div>").concat(topFive[1][1], "</div>\n<div>3.</div><div>").concat(topFive[2][0], "</div><div>").concat(topFive[2][1], "</div>\n<div>4.</div><div>").concat(topFive[3][0], "</div><div>").concat(topFive[3][1], "</div>\n<div>5.</div><div>").concat(topFive[4][0], "</div><div>").concat(topFive[4][1], "</div>\n");
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

var minusScore = function minusScore() {
  count -= 5;
  scoreDisplay.innerHTML = count;
};

var gameStart = function gameStart() {
  startButton.classList.remove("active");
  var timingFunction = setInterval(function () {
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

    timeOutTrigger += 1;
    console.log(timeOutTrigger);

    if (timeOutTrigger >= 15) {
      gameOverDisplay.classList.add("display-active");
      gameOverScore.innerHTML = count;
      clearInterval(timingFunction);
    }

    console.log(randNum);
  }, 1000);
};

var updateHighscores = function updateHighscores(e) {
  e.preventDefault();
  topFive[5] = [playerName.value, count];
  topFive = topFive.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.table(topFive);
  highScorestopFive.innerHTML = "\n  <div>1.</div><div>".concat(topFive[0][0], "</div><div>").concat(topFive[0][1], "</div>\n  <div>2.</div><div>").concat(topFive[1][0], "</div><div>").concat(topFive[1][1], "</div>\n  <div>3.</div><div>").concat(topFive[2][0], "</div><div>").concat(topFive[2][1], "</div>\n  <div>4.</div><div>").concat(topFive[3][0], "</div><div>").concat(topFive[3][1], "</div>\n  <div>5.</div><div>").concat(topFive[4][0], "</div><div>").concat(topFive[4][1], "</div>\n  ");
};

var resetGame = function resetGame() {
  count = 0;
  scoreDisplay.innerHTML = count;
  timeOutTrigger = 0;
  removeActive();
  moleAll.forEach(function (element) {
    return element.classList.add("active");
  });
  startButton.classList.add("active");
  gameOverDisplay.classList.remove("display-active");
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
highScoreSubmit.addEventListener("click", updateHighscores);
GoAgainButton.addEventListener("click", resetGame);
bombOne.addEventListener("click", minusScore);
bombTwo.addEventListener("click", minusScore);
bombThree.addEventListener("click", minusScore);
bombFour.addEventListener("click", minusScore);
bombFive.addEventListener("click", minusScore);
bombSix.addEventListener("click", minusScore);
bombSeven.addEventListener("click", minusScore);
bombEight.addEventListener("click", minusScore);
bombNine.addEventListener("click", minusScore);