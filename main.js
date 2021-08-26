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

let count = 0;

const scoreAcc = () => {
  count += 1;
  scoreDisplay.innerHTML = count;
}
const gameStart = () => {
  setInterval(function(){    
    let randNum = Math.floor((Math.random() * 10) + 1); 
  
    if (randNum === 1) {
      moleOne.setAttribute("class", "mole-1 mole active")
    }
    if (randNum === 2) {
      moleTwo.setAttribute("class", "mole-2 mole active")
    }
    if (randNum === 3) {
      moleThree.setAttribute("class", "mole-3 mole active")
    }
    console.log(randNum);
  }, 1000);
}

moleOne.addEventListener("click", function () {scoreAcc()});
moleTwo.addEventListener("click", function () {scoreAcc()});
moleThree.addEventListener("click", function () {scoreAcc()});
moleFour.addEventListener("click", function () {scoreAcc()});
moleFive.addEventListener("click", function () {scoreAcc()});
moleSix.addEventListener("click", function () {scoreAcc()});
moleSeven.addEventListener("click", function () {scoreAcc()});
moleEight.addEventListener("click", function () {scoreAcc()});
moleNine.addEventListener("click", function () {scoreAcc()});
startButton.addEventListener("click", function () {gameStart()});