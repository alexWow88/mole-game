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
const gameStart = () => {
  startButton.classList.remove("active");
  setInterval(function(){    
    let randNum = Math.floor((Math.random() * 10) + 1); 
  
    if (randNum === 1) {
      removeActive();
      moleOne.setAttribute("class", "mole-1 mole active")
    }
    if (randNum === 2) {
      removeActive();
      moleTwo.setAttribute("class", "mole-2 mole active")
    }
    if (randNum === 3) {
      removeActive();
      moleThree.setAttribute("class", "mole-3 mole active")
    }
    if (randNum === 4) {
      removeActive();
      moleFour.setAttribute("class", "mole-4 mole active")
    }
    if (randNum === 5) {
      removeActive();
      moleFive.setAttribute("class", "mole-5 mole active")
    }
    if (randNum === 6) {
      removeActive();
      moleSix.setAttribute("class", "mole-6 mole active")
    }
    if (randNum === 7) {
      removeActive();
      moleSeven.setAttribute("class", "mole-7 mole active")
    }
    if (randNum === 8) {
      removeActive();
      moleEight.setAttribute("class", "mole-8 mole active")
    }
    if (randNum === 9) {
      removeActive();
      moleNine.setAttribute("class", "mole-9 mole active")
    }
    console.log(randNum);
  }, 1000);
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