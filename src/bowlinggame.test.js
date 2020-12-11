import { expect } from 'chai'
//import { BowlingGame } from './bowlinggame';

const BowlingGame = require('./bowlinggame');

let game;
beforeEach(() => {
  game = new BowlingGame
})

it ("should return 0 for a game of all zeros", () => {
  //const game = new BowlingGame(); move to beforeEach
  
  //move to rollMany function
  // for (let i = 0; i < 20; i++) {
  //   game.roll(0)
  // }

  rollMany(0, 20)
  expect(game.score).to.deep.equal(0);
})

it ("should return 20 for a game of all 1's", () => {
  //const game = new BowlingGame(); //move to beforeEach

  // more to rollMany function
  // for (let i = 0; i < 20; i++) {
  //   game.roll(1)
  // }

  rollMany(1, 20)
  expect(game.score).to.deep.equal(20)
})

it ("should return the correct score when a spare is rolled", () => {
  game.roll(5)
  game.roll(5)
  game.roll(3)
  rollMany(0,17)//the rest are gutterballs
  expect(game.score).to.deep.equal(16)
})

function rollMany(pins, rolls) {
  // for (let i = 0; i < 20; i++) { // for reference
  //   game.roll(1)
  // }
  for (let i = 0; i < rolls; i++) {
    game.roll(pins)
  }
} 