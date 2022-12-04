const { Console } = require("console");
const fs = require("fs");

const input = fs.readFileSync('./day3.input.txt', 'utf-8');

function part1() {

  const scoreMap = [
    ...Array.from({ length: 26 }, (_, i) => i + 97),
    ...Array.from({ length: 26 }, (_, i) => i + 65)
  ];

  const { output, count } = input.split("\n").reduce((acc, line) => {

    const firstHalf = line.slice(0, Math.floor(line.length / 2)).split('');
    const secondHalf = line.slice(Math.floor(line.length / 2), line.length);

    const template = Object.fromEntries([...firstHalf.map((letter) => ([letter, true]))])

    for (const letter of secondHalf) {
      if (template[letter]) {
        const charCode = letter.charCodeAt(0);
        acc.count += scoreMap.indexOf(charCode) + 1;
        break;
      }
    }

    return acc;

  }, { count: 0 });

  console.log(count);
}

// part1();

function part2() {

  const scoreMap = [
    ...Array.from({ length: 26 }, (_, i) => i + 97),
    ...Array.from({ length: 26 }, (_, i) => i + 65)
  ];

  const { count, ocurrence } = input.split("\n").reduce((acc, line) => {
    acc.accumulator.push(line.split('').reduce((acc, letter) => {
      if (!acc.includes(letter)) {
        acc += letter
      }
      return acc;
    }, ''));

    if (acc.accumulator.length === 3) {
      acc.ocurrence += 1
      const sortedAccumulator = acc.accumulator.sort((a, b) => b.length - a.length);

      const [firstLine, secondLine, thirdLine] = sortedAccumulator;

      const template = Object.fromEntries([...firstLine.split("").map((letter) => ([letter, 1]))]);

      for (let i = 0; i < [...secondLine, ...thirdLine].length; i += 1) {
        template[[...secondLine, ...thirdLine][i]] += 1;
        if (template[[...secondLine, ...thirdLine][i]] % 3 === 0) {
          const charCode = [...secondLine, ...thirdLine][i].charCodeAt(0);
          acc.count += scoreMap.indexOf(charCode) + 1;
        }
      }

      acc.accumulator = [];
    }

    return acc;
  }, { accumulator: [], count: 0, ocurrence: 0 }) // 1   
  
  console.log(count, ocurrence, 'length result');
}

part2();