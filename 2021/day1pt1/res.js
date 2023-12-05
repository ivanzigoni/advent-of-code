const fs = require("fs")

const inputString = fs.readFileSync("input.txt", "utf-8")

const input = inputString.split('\n')

// solution 1
// const measure = (input) => {
//   let output = 0;

//   for (let i = 1; i < input.length; i++ ) {
//     const num = Number(input[i]);
//     const prev = Number(input [i - 1]);
//     if (num > prev) output += 1
//   }

//   return output;
// }

// solution 2
const measure = (output = 0, index = 1) => {
  const num = Number(input[index]);
  const prev = Number(input[index - 1]);

  // solution 2.1 
  // if (input[index]) {
  //   if (num > prev) return measure((output + 1), (index + 1));
  //   else return measure(output, index + 1);
  // } else return output;

  // solution 2.2
  return input[index]
  ? (num > prev)
    ? measure(output + 1, index + 1)
    : measure(output, index + 1)
  : output;
}

console.log(measure())