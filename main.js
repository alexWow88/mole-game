const startButton = document.querySelector(".start__button");
const moleAll = document.querySelectorAll(".mole");
const scoreDisplay = document.querySelector(".score__display__result");
const gameOverDisplay = document.querySelector(".gameover-display");
const gameOverScore = document.querySelector(".gameover-display__score");
const highScorestopFive = document.querySelector(".gameover-display__highscore-list");
const playerName = document.querySelector(".gameover-display__player__input");
const highScoreSubmit = document.querySelector(".gameover-display__player__submit");
const GoAgainButton = document.querySelector(".gameover-display__retry-button");
const bombAll = document.querySelectorAll(".bomb");
const explosionAll = document.querySelectorAll(".explosion");

let count = 0;
let timeOutTrigger = 0;
let topFive = [["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0], ["xxxx", 0]];

// var audio = new Audio("/assets/bensound-theelevatorbossanova.mp3");
// audio.play();

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
const removeActiveExplosion = () => {
  explosionAll.forEach(element => {
    if (element.classList.contains("explosion-active")) {
      element.classList.remove("explosion-active");
  }})
}
const minusScore = (explosionIndex) => {
  count -= 5;
  scoreDisplay.innerHTML = count;
  removeActiveBomb();
  explosionAll[explosionIndex].classList.add("explosion-active");
}
const gameStart = () => {
  removeActive();
  count = 0;
  scoreDisplay.innerHTML = count;
  startButton.classList.remove("active");
  let timingFunction = setInterval(function(){    
    let randNum = Math.floor((Math.random() * 10) + 1);
    if (randNum !== 10) {
      let randNumBomb = Math.floor((Math.random() * 10) + 1); 
      removeActive();
      removeActiveBomb();
      removeActiveExplosion();

      for (let index = 0; index <= 8; index++) {
        if (randNum === index + 1) {
          if (randNumBomb >= 8) {
            bombAll[index].setAttribute("class", "bomb bomb-active")
          } else {
            moleAll[index].setAttribute("class", "mole active")
          }
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
  removeActiveExplosion();
  moleAll.forEach(element => element.classList.add("active"));
  startButton.classList.add("active");
  gameOverDisplay.classList.remove("display-active")
}

moleAll.forEach(index => index.addEventListener("click", incrementScore));
startButton.addEventListener("click", gameStart);
highScoreSubmit.addEventListener("click", updateHighscores);
GoAgainButton.addEventListener("click", resetGame);
bombAll[0].addEventListener("click", () => minusScore(0));
bombAll[1].addEventListener("click", () => minusScore(1));
bombAll[2].addEventListener("click", () => minusScore(2));
bombAll[3].addEventListener("click", () => minusScore(3));
bombAll[4].addEventListener("click", () => minusScore(4));
bombAll[5].addEventListener("click", () => minusScore(5));
bombAll[6].addEventListener("click", () => minusScore(6));
bombAll[7].addEventListener("click", () => minusScore(7));
bombAll[8].addEventListener("click", () => minusScore(8));
// bombAll.addEventListener("click", () => minusScore(bombAll.indexof()));