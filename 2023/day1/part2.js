const fs = require("fs");

const p = "input.txt"

const input = fs.readFileSync(p, "utf-8");

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

function isNum(char) {
  return !isNaN(Number(char))
}

function replace(st, replacement, i) {
  return st.substring(0, i) + replacement + st.substring(i + 1)
}

function parseLine(rawLine) {
  return numString
    .reduce((acc, map) => {

      const { st, v } = map;

      const matches = rawLine.matchAll(st)

      if (matches) {
        for (const { index } of matches) {
          acc = replace(acc, v, index)
        }
      }

      return acc;

    }, rawLine)
    .split("")
    .reduce((acc, char) => {

      if (isNum(char)) {
        acc += char
      }

      return acc;
  }, "")
}

function main() {

  const lines = input.split("\n");

  const { total } = lines.reduce((acc, rawLine) => {

    const specs = { first: null, last: null }

    const line = parseLine(rawLine);

    for (const char of line) {

      if (!specs.first) {
        specs.first = char;
        specs.last = char;
      } else {
        specs.last = char;
      }

    }

    const str = `${specs.first}${specs.last}`

    acc.total += isNum(str) ? Number(str) : 0

    return acc;

  }, { total: 0 })

  console.log(total);

}


main()