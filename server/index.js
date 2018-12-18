const Server = require('boardgame.io/server').Server;
const Game = require('boardgame.io/core').Game;

const game = Game({
  setup: () => ({board: Array(10).fill(null)})
});

const server = Server({
  games: [game]
});

console.log(server.app);
