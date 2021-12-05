import inputArray from "./input.js";

const navigator = () => {
  let position = [0, 0, 0];

  const methods = {
    down: (value) => {
      const [depth, hp, aim] = position;
      return [depth, hp, aim + value];
    },
    up: (value) => {
      const [depth, hp, aim] = position;
      return [depth, hp, aim - value];
    },
    forward: (value) => {
      const [depth, hp, aim] = position;
      return [depth + (aim * value), hp + value, aim];
    },
  }

  for(let i = 0; i < inputArray.length; i++) {
    const string = inputArray[i];
    const [command, valueString] = string.split(' ');
    const value = Number(valueString);
    const direction = methods[command];
    position = direction(value);
  }
  
  const [depth, hp] = position;
  return depth * hp;
}

console.log(navigator());
