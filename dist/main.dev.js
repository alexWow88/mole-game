"use strict";

var startButton = document.querySelector(".start__button");
var moleAll = document.querySelectorAll(".mole");
var scoreDisplay = document.querySelector(".score__display__result");
var gameOverDisplay = document.querySelector(".gameover-display");
var gameOverScore = document.querySelector(".gameover-display__score");
var highScorestopFive = document.querySelector(".gameover-display__highscore-list");
var playerName = document.querySelector(".gameover-display__player__input");
var highScoreSubmit = document.querySelector(".gameover-display__player__submit");
var GoAgainButton = document.querySelector(".gameover-display__retry-button");
var bombAll = document.querySelectorAll(".bomb");
var explosionAll = document.querySelectorAll(".explosion");
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

var removeActiveBomb = function removeActiveBomb() {
  bombAll.forEach(function (element) {
    if (element.classList.contains("bomb-active")) {
      element.classList.remove("bomb-active");
    }
  });
};

var removeActiveExplosion = function removeActiveExplosion() {
  explosionAll.forEach(function (element) {
    if (element.classList.contains("explosion-active")) {
      element.classList.remove("explosion-active");
    }
  });
};

var minusScore = function minusScore(explosionIndex) {
  count -= 5;
  scoreDisplay.innerHTML = count;
  removeActiveBomb();
  explosionAll[explosionIndex].classList.add("explosion-active");
};

var gameStart = function gameStart() {
  removeActive();
  count = 0;
  scoreDisplay.innerHTML = count;
  startButton.classList.remove("active");
  var timingFunction = setInterval(function () {
    var randNum = Math.floor(Math.random() * 10 + 1);

    if (randNum !== 10) {
      var randNumBomb = Math.floor(Math.random() * 10 + 1);

      if (randNum === 1) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[0].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[0].setAttribute("class", "mole active");
        }
      }

      if (randNum === 2) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[1].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[1].setAttribute("class", "mole active");
        }
      }

      if (randNum === 3) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[2].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[2].setAttribute("class", "mole active");
        }
      }

      if (randNum === 4) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[3].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[3].setAttribute("class", "mole active");
        }
      }

      if (randNum === 5) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[4].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[4].setAttribute("class", "mole active");
        }
      }

      if (randNum === 6) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[5].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[5].setAttribute("class", "mole active");
        }
      }

      if (randNum === 7) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[6].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[6].setAttribute("class", "mole active");
        }
      }

      if (randNum === 8) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[7].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[7].setAttribute("class", "mole active");
        }
      }

      if (randNum === 9) {
        removeActive();
        removeActiveBomb();
        removeActiveExplosion();

        if (randNumBomb >= 8) {
          bombAll[8].setAttribute("class", "bomb bomb-active");
        } else {
          moleAll[8].setAttribute("class", "mole active");
        }
      }

      timeOutTrigger += 1;
      console.log(timeOutTrigger);

      if (timeOutTrigger >= 15) {
        gameOverDisplay.classList.add("display-active");
        gameOverScore.innerHTML = count;
        clearInterval(timingFunction);
      }

      console.log(randNum);
      console.log(randNumBomb);
    }
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
  removeActiveBomb();
  removeActiveExplosion();
  moleAll.forEach(function (element) {
    return element.classList.add("active");
  });
  startButton.classList.add("active");
  gameOverDisplay.classList.remove("display-active");
};

moleAll.forEach(function (index) {
  return index.addEventListener("click", incrementScore);
});
startButton.addEventListener("click", gameStart);
highScoreSubmit.addEventListener("click", updateHighscores);
GoAgainButton.addEventListener("click", resetGame);
bombAll[0].addEventListener("click", function () {
  return minusScore(0);
});
bombAll[1].addEventListener("click", function () {
  return minusScore(1);
});
bombAll[2].addEventListener("click", function () {
  return minusScore(2);
});
bombAll[3].addEventListener("click", function () {
  return minusScore(3);
});
bombAll[4].addEventListener("click", function () {
  return minusScore(4);
});
bombAll[5].addEventListener("click", function () {
  return minusScore(5);
});
bombAll[6].addEventListener("click", function () {
  return minusScore(6);
});
bombAll[7].addEventListener("click", function () {
  return minusScore(7);
});
bombAll[8].addEventListener("click", function () {
  return minusScore(8);
});