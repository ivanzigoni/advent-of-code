const fs = require("fs");

const p = "/home/ivan/Documents/pessoal/repos/advent-of-code/2023/day1/part1.input.txt"

const input = fs.readFileSync(p, "utf-8");

function main() {

  const lines = input.split("\n");

  const { total } = lines.reduce((acc, line, i) => {

    acc[i] = { first: null, last: null }

    for (const char of line) {

      if (!isNaN(Number(char))) {
        
        if (!acc[i].first) {
          acc[i].first = char;
          acc[i].last = char;
        } else {
          acc[i].last = char;
        }

      }

    }

    acc.total += !isNaN(Number(`${acc[i].first}${acc[i].last}`)) ? Number(`${acc[i].first}${acc[i].last}`) : 0

    return acc;

  }, { total: 0 })

  console.log(total);

}


main()