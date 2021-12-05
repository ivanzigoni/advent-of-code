import inputArray from "./input.js";

const diagnostic = () => {
  const digitMap = [];
  let gamma = '';
  let epsilon = '';

  for(let i = 0; i < inputArray.length; i++) {
    const string = inputArray[i];
    for (let k = 0; k < string.length; k++) {
      const digit = string[k];
      const isOne = digit === '1';
      const isZero = digit === '0';
      if (!digitMap[k]) digitMap[k] = {oneQuantity: 0, zeroQuantity: 0};
      if (isOne) digitMap[k].oneQuantity += 1;
      else if (isZero) digitMap[k].zeroQuantity += 1;
    }
  }
  
  for (let i = 0; i < digitMap.length; i++) {
    const { oneQuantity, zeroQuantity } = digitMap[i];
    if (zeroQuantity > oneQuantity) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  const gammaInt = parseInt(gamma, 2);
  const epsilonInt = parseInt(epsilon, 2);

  return gammaInt * epsilonInt;
}


console.log(diagnostic());