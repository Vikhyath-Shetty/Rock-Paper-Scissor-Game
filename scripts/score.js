export function renderScore(score) {
  const scoreHTML = `
  <p class="user-score">${score.playerScore}</p>
  <p class="timer">00:00</p>
  <p class="computer-score">${score.computerScore}</p>
  `;

  document.querySelector(".js-score-container").innerHTML = scoreHTML;
}

export function saveScore(score) {
  localStorage.setItem("gameScore", JSON.stringify(score));
}

export function getScore() {
  return JSON.parse(localStorage.getItem("gameScore"));
}

export function setScore(score) {
  score.playerScore = score.computerScore = 0;
}
