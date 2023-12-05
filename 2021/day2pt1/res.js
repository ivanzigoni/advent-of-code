const fs = require("fs")

const inputString = fs.readFileSync("input.txt", "utf-8")

const inputArr = inputString.split('\n');
inputArr.shift();
// solution 1
const navigator = () => {
  let position = [0, 0];
  const methods = {
    down: (value) => [position[0] + value, position[1]],
    up: (value) => [position[0] - value, position[1]],
    forward: (value) => [position[0], position[1] + value],
  }

  for(let i = 0; i < inputArr.length; i++) {
    const string = inputArr[i];
    const [command, valueString] = string.split(' ');
    const value = Number(valueString);
    const direction = methods[command];
    position = direction(value);
  }

  const [profundidade, longitude] = position;
  return profundidade * longitude;
}

// solution 2
// const navigator = (position = [0, 0], index = 0) => {  
//   const methods = {
//     down: (value) => [position[0] + value, position[1]],
//     up: (value) => [position[0] - value, position[1]],
//     forward: (value) => [position[0], position[1] + value],
//   }
//   const string = inputArr[index];

//   if (string) {
//     const [command, valueString] = string.split(' ');
//     const value = Number(valueString);
//     const direction = methods[command];
//     const newPosition = direction(value);
//     return navigator(newPosition, index += 1);
//   } else {
//     const [profundidade, longitude] = position;
//     return profundidade * longitude;
//   }

// }

console.log(navigator());