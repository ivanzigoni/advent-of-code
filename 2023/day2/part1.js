const fs = require("fs")

const input = fs.readFileSync("input.txt", "utf-8")

const occurrencesLimits = {
  red: 12,
  green: 13,
  blue: 14
}

function parseLine(line) {
  const gameId = line.split(":")[0].split(" ")[1];

  const game = line.split(":")[1];

  return {
    gameId,
    game
  }

}

function validateGame(game) {
  return game
    .replaceAll(";", ",")
    .split(",")
    .every((reveal) => {

      const [occurence, color] = reveal.trim().split(" ");

      return Number(occurence) <= occurrencesLimits[color]

    })
}

function main() {

  const lines = input.split("\n");

  const { result } = lines.reduce((acc, line) => {

    const {
      gameId,
      game
    } = parseLine(line);

    const gameIsValid = validateGame(game);

    if (gameIsValid) {
      acc.result += Number(gameId);
    }

    return acc;

  }, { result: 0 })


  console.log(result);

}

main();
