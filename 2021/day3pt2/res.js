import inputArray from '../day3pt1/input.js';

const diagnostic = () => {
  let output = [...inputArray];
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


  console.log(output);
}

diagnostic()
// console.log(inputArray);