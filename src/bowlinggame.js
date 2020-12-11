class BowlingGame {
  constructor() {
    //this.totalScore = 0
    this.rolls = []
  }
  roll(pins) {
    //this.totalScore  = this.totalScore  + pins
    this.rolls.push(pins)
  }

  get score() {
    //return this.totalScore 
    let score = 0;
    let rollIndex = 0
    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

      if (frameScore === 10) {
        score += 10 + this.rolls[rollIndex + 2 ];
      } else {
        score += frameScore
      }
      rollIndex += 2
    }
    return score
  }
}
module.exports = BowlingGame





// export const Game = {
//   make: function() {
//     return Object.create(this.prototype, {
//       _score: {
//         writable: true,
//         value: 0
//       }
//     });
//   },

//   prototype: {
//     roll: function(pinsDown) {
//       this._score += pinsDown
//     },

//     score: function() {
//       let score = 0;
//       score += pinsDown;
//       return score;
//     },
//   }
// }