const score = getScore() || {
  playerScore: 0,
  computerScore: 0,
};

const lastGameMoves = getLastMoves() || {
  playerMove: "rock",
  computerMove: "paper",
};

renderScore();
renderMoves(lastGameMoves.playerMove,lastGameMoves.computerMove);

document.querySelector(".js-resetButton").addEventListener("click", () => {
  localStorage.clear();
  renderScore();
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

  renderScore();
  saveScore();
  saveLastMoves(playerMove, computerMove);
}

function renderMoves(playerMove, computerMove) {
  const movesHTML = `
  <img class="playerMove-image" src="./Assets/${playerMove}-image.png" alt="${playerMove}-image">
  <p>VS</p>
  <img class="computerMove-image" src="./Assets/${computerMove}-image.png" alt="${computerMove}-image">
  `;

  document.querySelector(".js-moves-container").innerHTML = movesHTML;
}

function renderScore() {
  const scoreHTML = `
  <p class="user-score">${score.playerScore}</p>
  <p class="timer">00:00</p>
  <p class="computer-score">${score.computerScore}</p>
  `;

  document.querySelector(".js-score-container").innerHTML = scoreHTML;
}


function saveScore() {
  localStorage.setItem("gameScore", JSON.stringify(score));
}

function getScore() {
  return JSON.parse(localStorage.getItem("gameScore"));
}

function resetGame() {
  localStorage.removeItem("gameScore");
  localStorage.removeItem("lastMoves");
}

function saveLastMoves(playerMove, computerMove) {
  lastGameMoves.computerMove = computerMove;
  lastGameMoves.playerMove = playerMove;
  localStorage.setItem("lastMoves", JSON.stringify(lastGameMoves));
}

function getLastMoves() {
  return JSON.parse(localStorage.getItem("lastMoves"));
}
