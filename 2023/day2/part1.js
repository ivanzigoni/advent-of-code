const fs = require("fs")

const input = fs.readFileSync("day2.input.txt", "utf-8")

const occurrenceLimits = {
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

function main() {

  const lines = input.split("\n");

  const { result } = lines.reduce((acc, line) => {

    const {
      gameId,
      game
    } = parseLine(line);

    const isGameValid = game
      .replaceAll(";", ",")
      .split(",")
      .every((reveal) => {

        const [occurence, color] = reveal.trim().split(" ");

        if (Number(occurence) > occurrenceLimits[color]) {
          return false;
        } else {
          return true;
        }

      })

      if (isGameValid) {
        acc.result += Number(gameId);
      }


    return acc;
  }, { result: 0 })


  console.log(result);

}

main();
