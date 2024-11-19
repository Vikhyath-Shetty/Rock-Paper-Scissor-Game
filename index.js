import { score } from "./scripts/data.js";
import { renderScore,saveScore,setScore } from "./scripts/score.js";


let lastGameMoves = getLastMoves() || {
  playerMove: "rock",
  computerMove: "paper",
};

renderScore(score);
renderMoves(lastGameMoves.playerMove, lastGameMoves.computerMove);

document.querySelector(".js-resetButton").addEventListener("click", () => {
  resetGame();
});

function getComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber > 0 && randomNumber <= 1 / 3) computerMove = "rock";
  else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3)
    computerMove = "paper";
  else computerMove = "scissor";

  return computerMove;
}

 function playGame(playerMove) {
  const computerMove = getComputerMove();
  renderMoves(playerMove, computerMove);
  if (playerMove === computerMove) return;
  else if (
    (playerMove === "rock" && computerMove === "scissor") ||
    (playerMove === "scissor" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")
  ) {
    score.playerScore += 1;
  } else score.computerScore += 1;
  renderScore(score);
  saveScore(score);
  saveLastMoves(playerMove, computerMove);
}

//this is to make playGame globally accessible by storing it in window object. By doing this we can use playgame within onclick="" attribute which isn't possible otherwise(as it is located within a module). 
window.playGame = playGame;

function renderMoves(playerMove, computerMove) {
  const movesHTML = `
  <img class="playerMove-image" src="./Assets/${playerMove}-image.png" alt="${playerMove}-image">
  <p>VS</p>
  <img class="computerMove-image" src="./Assets/${computerMove}-image.png" alt="${computerMove}-image">
  `;

  document.querySelector(".js-moves-container").innerHTML = movesHTML;
}

function resetGame() {
  localStorage.clear();
  setScore(score);
  resetLastMoves();
  renderScore(score);
  renderMoves(lastGameMoves.playerMove, lastGameMoves.computerMove);
}


function resetLastMoves() {
  lastGameMoves.playerMove = "rock";
  lastGameMoves.computerMove = "paper";
}

function saveLastMoves(playerMove, computerMove) {
  lastGameMoves.computerMove = computerMove;
  lastGameMoves.playerMove = playerMove;
  localStorage.setItem("lastMoves", JSON.stringify(lastGameMoves));
}

function getLastMoves() {
  return JSON.parse(localStorage.getItem("lastMoves"));
}

