import { setScore, renderScore } from "./score.js";
import { resetLastMoves, renderMoves } from "./moves.js";
import { score, lastGameMoves } from "./data.js";

export function resetButton() {
  localStorage.clear();
  setScore(score);
  resetLastMoves(lastGameMoves);
  renderScore(score);
  renderMoves(lastGameMoves.playerMove, lastGameMoves.computerMove);
}
