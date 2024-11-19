export function resetLastMoves(lastGameMoves) {
  lastGameMoves.playerMove = "rock";
  lastGameMoves.computerMove = "paper";
}

export function saveLastMoves(lastGameMoves, playerMove, computerMove) {
  lastGameMoves.computerMove = computerMove;
  lastGameMoves.playerMove = playerMove;
  localStorage.setItem("lastMoves", JSON.stringify(lastGameMoves));
}

export function getLastMoves() {
  return JSON.parse(localStorage.getItem("lastMoves"));
}

export function renderMoves(playerMove, computerMove) {
  const movesHTML = `
  <img class="playerMove-image" src="./Assets/${playerMove}-image.png" alt="${playerMove}-image">
  <p>VS</p>
  <img class="computerMove-image" src="./Assets/${computerMove}-image.png" alt="${computerMove}-image">
  `;

  document.querySelector(".js-moves-container").innerHTML = movesHTML;
}
