const fs = require("fs");

const input = fs.readFileSync('./day4.input.txt', 'utf-8');

function part1() {

  const { count } = input.split("\n").reduce((acc, line) => {
    
    const sortedLine = line.split(",").sort((a, b) => {
      const [firstPairStart, firstPairEnd] = a.split("-");
      const [secondPairStart, secondPairEnd] = b.split("-");
    
      if (Number(firstPairStart) === Number(secondPairStart)) {
        return Number(secondPairEnd) - Number(firstPairEnd)
      } else {
        return Number(firstPairStart) - Number(secondPairStart)
      }
    });

    const [firstPair, secondPair] = sortedLine;

    const firstPairEnd = Number(firstPair.split('-')[1]);
    const secondPairEnd = Number(secondPair.split('-')[1]);
    
    if (firstPairEnd >= secondPairEnd) {
      acc.count += 1;
    }

    return acc;
  }, { count: 0 })

  console.log(count);
}

part1();