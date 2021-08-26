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

let startButton = document.querySelector(".start__button");
let moleOne = document.querySelector(".mole-1");
let moleTwo = document.querySelector(".mole-2");
let moleThree = document.querySelector(".mole-3");
let moleFour = document.querySelector(".mole-4");
let moleFive = document.querySelector(".mole-5");
let moleSix = document.querySelector(".mole-6");
let moleSeven = document.querySelector(".mole-7");
let moleEight = document.querySelector(".mole-8");
let moleNine = document.querySelector(".mole-9");
let moleTen = document.querySelector(".mole-10");
let scoreDisplay = document.querySelector(".score__display__result");

let count = 0;

const scoreAcc = () => {
  count += 1;
  scoreDisplay.innerHTML = count;
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