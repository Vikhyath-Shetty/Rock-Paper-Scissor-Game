import { getScore } from "./score.js";
import { getLastMoves } from "./moves.js";

export const score = getScore() || {
  playerScore: 0,
  computerScore: 0,
};

export const lastGameMoves = getLastMoves() || {
  playerMove: "rock",
  computerMove: "paper",
};
