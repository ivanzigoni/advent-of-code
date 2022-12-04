const fs = require("fs");

const input = fs.readFileSync('./day2.input.txt', 'utf-8');

function part1and2() {

  const rules = {
    predictment: {
      'X': 'lose',
      'Y': 'draw',
      'Z': 'win'
    },
    oponentLetterToMove: { // plays first
      'A': 'rock',
      'B': 'paper',
      'C': 'scissors'
    },
    ourLetterToMove: { // plays second
      'X': 'rock',
      'Y': 'paper',
      'Z': 'scissors'
    },
    moveScore: {
      'rock': 1,
      'paper': 2,
      'scissors': 3,
    },
    moveRules: {
      'scissors': ['rock', 'scissors', 'paper'],
      'rock': ['paper', 'rock', 'scissors'],
      'paper': ['scissors', 'paper', 'rock'] // 'value': [losesFor, drawsWith, winsAgainst]
    }
  }

  const output = input.split("\n").reduce((acc, letters) => {

    const [theirLetter, ourLetter] = letters.split(" ");

    const theirMove = rules.oponentLetterToMove[theirLetter];
    const ourMove = rules.ourLetterToMove[ourLetter];

    (() => {
      const [loseAgainst, drawWith, winAgainst] = rules.moveRules[theirMove];
      let predictedMove
      if (rules.predictment[ourLetter] === 'win') {
        acc.scoreByPredicment += 6;
        predictedMove = loseAgainst;
      } else if (rules.predictment[ourLetter] === 'lose') {
        predictedMove = winAgainst;
      } else if (rules.predictment[ourLetter] === 'draw') {
        acc.scoreByPredicment += 3;
        predictedMove = drawWith;
      }

      acc.scoreByPredicment += rules.moveScore[predictedMove];
    })();

    (() => {
      const [loseAgainst, drawWith, winAgainst] = rules.moveRules[ourMove];
      if (loseAgainst === theirMove) {
        // we lose
      } else if (drawWith === theirMove) {
        // we draw
        acc.score += 3;
      } else if (winAgainst === theirMove || ourLetter === 'Z'){
        // we win
        acc.score += 6;
      }

      acc.score += rules.moveScore[ourMove];
    })();

    return acc;

  }, { score: 0, scoreByPredicment: 0 })


  console.log(output);
}

part1and2()