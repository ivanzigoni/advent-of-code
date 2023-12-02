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

    const { blue, green, red } = game
      .replaceAll(";", ",")
      .split(",")
      .reduce((acc, reveal) => {

        const [occurrence, color] = reveal.trim().split(" ");

        if (Number(occurrence) > acc[color]) {
          acc[color] = Number(occurrence);
        }

        return acc;

      }, { blue: 0, green: 0, red: 0 })

    const gamePower = blue * green * red

    acc.result += gamePower;

    return acc;
  }, { result: 0 })


  console.log(result);

}

main();
