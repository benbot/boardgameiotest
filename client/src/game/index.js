import { Game } from 'boardgame.io/core';

const monument = Game({
  multiplayer: { local: true },
  setup: () => {/* TODO: Setup life totals and such */},
  moves: {/* TODO: Add all possible moves for the game*/},
  flow: {
    startingPhase: 'pregame',
    phases: {
      /* TODO: Add all phases */
    }
  }
});
