const fs = require("fs")

const inputString = fs.readFileSync("input.txt")

const inputArray = inputString.split('\n')

const calculatedValues = () => {
  const values = [];

  for (let i = 0; i < inputArray.length; i++) {
    const num1 = Number(inputArray[i]);
    const num2 = Number(inputArray[i + 1]);
    const num3 = Number(inputArray[i + 2]);
  
    values.push(
      num1 + num2 + num3 
    )
  }

  return values;
}

const input = calculatedValues()

const measure = (output = 0, index = 1) => {
  const num = input[index]
  const prev = input[index - 1]

  return input[index]
  ? (num > prev)
    ? measure(output + 1, index + 1)
    : measure(output, index + 1)
  : output;
}

console.log(measure())