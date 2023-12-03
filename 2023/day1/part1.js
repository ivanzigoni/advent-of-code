const fs = require("fs");

const p = "input.txt"

const input = fs.readFileSync(p, "utf-8");

function isNum(char) {
  return !isNaN(Number(char))
}

function main() {

  const lines = input.split("\n");

  const { total } = lines.reduce((acc, line) => {

    const specs = { first: null, last: null }

    for (const char of line) {

      if (!isNaN(Number(char))) {
        
        if (!specs.first) {
          specs.first = char;
          specs.last = char;
        } else {
          specs.last = char;
        }

      }

    }

    const str = `${specs.first}${specs.last}`

    acc.total += isNum(str) ? Number(str) : 0

    return acc;

  }, { total: 0 })

  console.log(total);

}


main()