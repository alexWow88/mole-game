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

const startButton = document.querySelector(".start__button");
const moleOne = document.querySelector(".mole-1");
const moleTwo = document.querySelector(".mole-2");
const moleThree = document.querySelector(".mole-3");
const moleFour = document.querySelector(".mole-4");
const moleFive = document.querySelector(".mole-5");
const moleSix = document.querySelector(".mole-6");
const moleSeven = document.querySelector(".mole-7");
const moleEight = document.querySelector(".mole-8");
const moleNine = document.querySelector(".mole-9");
const moleTen = document.querySelector(".mole-10");
const moleAll = document.querySelectorAll(".mole");
const scoreDisplay = document.querySelector(".score__display__result");
const gameOverDisplay = document.querySelector(".gameover-display");
const gameOverScore = document.querySelector(".gameover-display__score");
const highScorestopFive = document.querySelector(".gameover-display__highscore-list");
const playerName = document.querySelector(".gameover-display__player__input");
const highScoreSubmit = document.querySelector(".gameover-display__player__submit");
const GoAgainButton = document.querySelector(".gameover-display__retry-button");
const bombOne = document.querySelector(".bomb-1");
const bombTwo = document.querySelector(".bomb-2");
const bombThree = document.querySelector(".bomb-3");
const bombFour = document.querySelector(".bomb-4");
const bombFive = document.querySelector(".bomb-5");
const bombSix = document.querySelector(".bomb-6");
const bombSeven = document.querySelector(".bomb-7");
const bombEight = document.querySelector(".bomb-8");
const bombNine = document.querySelector(".bomb-9");
const bombAll = document.querySelectorAll(".bomb");

let count = 0;
let timeOutTrigger = 0;
let topFive = [["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0]];
highScorestopFive.innerHTML = `
<div>1.</div><div>${topFive[0][0]}</div><div>${topFive[0][1]}</div>
<div>2.</div><div>${topFive[1][0]}</div><div>${topFive[1][1]}</div>
<div>3.</div><div>${topFive[2][0]}</div><div>${topFive[2][1]}</div>
<div>4.</div><div>${topFive[3][0]}</div><div>${topFive[3][1]}</div>
<div>5.</div><div>${topFive[4][0]}</div><div>${topFive[4][1]}</div>
`

moleAll.forEach(element => element.classList.add("active"));

const incrementScore = () => {
  count += 1;
  scoreDisplay.innerHTML = count;
}
const removeActive = () => {
  moleAll.forEach(element => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
  }})
}
const removeActiveBomb = () => {
  bombAll.forEach(element => {
    if (element.classList.contains("bomb-active")) {
      element.classList.remove("bomb-active");
  }})
}
const minusScore = () => {
  count -= 5;
  scoreDisplay.innerHTML = count;
  removeActiveBomb();
}
const gameStart = () => {
  removeActive();
  startButton.classList.remove("active");
    let timingFunction = setInterval(function(){    
    let randNum = Math.floor((Math.random() * 10) + 1);
    if (randNum !== 10) {
    let randNumBomb = Math.floor((Math.random() * 10) + 1); 
  
    if (randNum === 1) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombOne.setAttribute("class", "bomb-1 bomb bomb-active")
      } else {
      moleOne.setAttribute("class", "mole-1 mole active")
      }
    }
    if (randNum === 2) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombTwo.setAttribute("class", "bomb-2 bomb bomb-active")
      } else {
      moleTwo.setAttribute("class", "mole-2 mole active")
      }
    }
    if (randNum === 3) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombThree.setAttribute("class", "bomb-3 bomb bomb-active")
      } else {
      moleThree.setAttribute("class", "mole-3 mole active")
      }
    }
    if (randNum === 4) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombFour.setAttribute("class", "bomb-4 bomb bomb-active")
      } else {
      moleFour.setAttribute("class", "mole-4 mole active")
      }
    }
    if (randNum === 5) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombFive.setAttribute("class", "bomb-5 bomb bomb-active")
      } else {
      moleFive.setAttribute("class", "mole-5 mole active")
      }
    }
    if (randNum === 6) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombSix.setAttribute("class", "bomb-6 bomb bomb-active")
      } else {
      moleSix.setAttribute("class", "mole-6 mole active")
      }
    }
    if (randNum === 7) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombSeven.setAttribute("class", "bomb-7 bomb bomb-active")
      } else {
      moleSeven.setAttribute("class", "mole-7 mole active")
      }
    }
    if (randNum === 8) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombEight.setAttribute("class", "bomb-8 bomb bomb-active")
      } else {
      moleEight.setAttribute("class", "mole-8 mole active")
      }
    }
    if (randNum === 9) {
      removeActive();
      removeActiveBomb();
      if (randNumBomb >= 8) {
        bombNine.setAttribute("class", "bomb-9 bomb bomb-active")
      } else {
      moleNine.setAttribute("class", "mole-9 mole active")
      }
    }
    timeOutTrigger += 1; 
    console.log(timeOutTrigger);
    if (timeOutTrigger >= 15) {
      gameOverDisplay.classList.add("display-active")
      gameOverScore.innerHTML = count;
      clearInterval(timingFunction);
    }
    console.log(randNum);
    console.log(randNumBomb);
  }
  }, 1000);
}
const updateHighscores = (e) => {
  e.preventDefault();
  topFive[5] = [playerName.value, count];
  topFive = topFive.sort((a , b) => (b[1] - a[1]));
  console.table(topFive);
  highScorestopFive.innerHTML = `
  <div>1.</div><div>${topFive[0][0]}</div><div>${topFive[0][1]}</div>
  <div>2.</div><div>${topFive[1][0]}</div><div>${topFive[1][1]}</div>
  <div>3.</div><div>${topFive[2][0]}</div><div>${topFive[2][1]}</div>
  <div>4.</div><div>${topFive[3][0]}</div><div>${topFive[3][1]}</div>
  <div>5.</div><div>${topFive[4][0]}</div><div>${topFive[4][1]}</div>
  `
}
const resetGame = () => {
  count = 0;
  scoreDisplay.innerHTML = count;
  timeOutTrigger = 0;
  removeActive();
  removeActiveBomb();
  moleAll.forEach(element => element.classList.add("active"));
  startButton.classList.add("active");
  gameOverDisplay.classList.remove("display-active")
}

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