import { getScore } from "./score.js";

export const score = getScore() || {
  playerScore: 0,
  computerScore: 0,
};