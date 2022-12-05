const fs = require('fs');

const rawInput = fs.readFileSync('./day5.input.txt', 'utf-8');

const input = rawInput.split('\n').reduce((acc, line) => {

  if (line[0] === '[') {
    const accumulator = [];
    for (let i = 1; i < line.length; i += 4) {
      accumulator.push(line[i]);
    }
    accumulator.forEach((el, index) => { el !== ' ' && acc.stack[index + 1].unshift(el) })
  }

  if (line[0] === 'm') {
    const [_, quantity, __, startPos, ___, endPos] = line.split(' ');

    acc.moves.push([Number(quantity), Number(startPos), Number(endPos)]);
  }

  return acc;

}, {
  stack: {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
  },
  moves: []
})

function part1() {
  const { moves, stack } = input;

  moves.forEach(move => {
    const [quantity, startPos, endPos] = move;

    // part1
    // for (let i = 0; i < quantity; i += 1) {
    //   const piece = stack[startPos].pop();
    //   stack[endPos].push(piece);
    // }

    const pieces = stack[startPos].splice(stack[startPos].length - quantity)
    stack[endPos] = [...stack[endPos], ...pieces];
  })

  const result = Object.values(stack).reduce((acc, el) => {
    acc += el[el.length - 1];
    return acc;
  }, '')

  console.log(result);
}

part1();

