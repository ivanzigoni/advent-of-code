const fs = require("fs");

const input = fs.readFileSync('./day4.input.txt', 'utf-8');

function day4() {

  const { count, overlaps } = input.split("\n").reduce((acc, line) => {
    
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
    const secondPairStart = Number(secondPair.split('-')[0]);
    const secondPairEnd = Number(secondPair.split('-')[1]);
    
    if (firstPairEnd >= secondPairEnd) {
      acc.count += 1;
    }

    if (firstPairEnd >= secondPairStart) {
      acc.overlaps += 1;
    }

    return acc;
  }, { count: 0, overlaps: 0 })

  console.log(count, overlaps);
}

day4();