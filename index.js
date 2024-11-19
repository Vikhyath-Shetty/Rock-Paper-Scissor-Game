import { score, lastGameMoves } from "./scripts/data.js";
import { renderScore, saveScore } from "./scripts/score.js";
import { resetButton } from "./scripts/buttons.js";
import { saveLastMoves, renderMoves } from "./scripts/moves.js";

renderScore(score);
renderMoves(lastGameMoves.playerMove, lastGameMoves.computerMove);

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
  saveLastMoves(lastGameMoves, playerMove, computerMove);
}

document.querySelector(".js-resetButton").addEventListener("click", () => {
  resetButton();
});

//this is to make playGame globally accessible by storing it in window object. By doing this we can use playgame within onclick="" attribute which isn't possible otherwise(as it is located within a module).
window.playGame = playGame;
