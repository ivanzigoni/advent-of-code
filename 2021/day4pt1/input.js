const fs = require("fs")

const input = fs.readFileSync("input.txt", "utf-8")

const playsArray = input.split("\n")[0].split(',')

const [plays, boardArray] = input.split("\n")

let boardsArray = [];
let board = '';
let lineQuantity = 0;

for (let i = 0; i < boardArray.length; i++) {
  const line = boardArray[i];
  if (line !== '') {
    board += line + ' ';
    lineQuantity += 1;
  }
  if (lineQuantity === 5) {
    boardsArray.push(board)
    board = '';
    lineQuantity = 0;
  }
}

const parsedInput = {boards: boardsArray, plays: playsArray}

export default parsedInput;
