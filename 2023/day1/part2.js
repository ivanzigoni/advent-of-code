const fs = require("fs");

const p = "/home/ivan/Documents/pessoal/repos/advent-of-code/2023/day1/part2.input.txt"

const input = fs.readFileSync(p, "utf-8");

function isNum(char) {
  return !isNaN(Number(char))
}

function replace(st, replacement, i) {
  return st.substring(0, i) + replacement + st.substring(i + 1)
}

function main() {

  const numString = [
    { st: "one", v: 1 },
    { st: "two", v: 2 },
    { st: "three", v: 3 },
    { st: "four", v: 4 },
    { st: "five", v: 5 },
    { st: "six", v: 6 },
    { st: "seven", v: 7 },
    { st: "eight", v: 8 },
    { st: "nine", v: 9 },
  ]

  const lines = input.split("\n");

  const { total } = lines.reduce((acc, rawLine, i) => {

    acc[i] = { first: null, last: null }

    let line = rawLine;

    numString.forEach(({ st, v }) => {
      const matches = rawLine.matchAll(st)

      if (matches) {
        for (const { index } of matches) {
          line = replace(line, v, index)
        }
      }
    })

    line = line.split("").reduce((acc, char) => {

      if (isNum(char)) {
        acc += char
      }

      return acc;
    }, "")


    for (const char of line) {

      if (!acc[i].first) {
        acc[i].first = char;
        acc[i].last = char;
      } else {
        acc[i].last = char;
      }

    }

    const str = `${acc[i].first}${acc[i].last}`

    acc.total += isNum(str) ? Number(str) : 0

    return acc;

  }, { total: 0 })

  console.log(total);

}


main()