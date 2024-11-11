const score = {
  playerScore: 0,
  computerScore: 0,
};

renderMoves();

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

}


function renderMoves(playerMove, computerMove) {
  const movesHTML = `
  <img class="playerMove-image" src="./Assets/${playerMove}-image.png" alt="${playerMove}-image">
  <p>VS</p>
  <img class="computerMove-image" src="./Assets/${computerMove}-image.png" alt="${computerMove}-image">
  `;

  document.querySelector('.js-moves-container').innerHTML = movesHTML;
}

function renderScore(score) {
  
}
