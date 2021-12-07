import inputArray from '../day3pt1/input.js';

const digitMapGenerator = (array, position) => {
  const digitMap = {zeroQuantity: 0, oneQuantity: 0};
  for(let i = 0; i < array.length; i++) {
    const binary = array[i];
    binary[position] === '1'
    ? digitMap.oneQuantity += 1
    : digitMap.zeroQuantity += 1
  }
  return digitMap;
}

const diagnostic = () => {
  let oxygen = [...inputArray], scrubber = [...inputArray], digitIndex = 0;

  while (oxygen.length !== 1) {
    const { oneQuantity, zeroQuantity } = digitMapGenerator(oxygen, digitIndex);
    const mostCommonDigit = oneQuantity >= zeroQuantity ? '1' : '0';
    oxygen = oxygen.filter(binary => binary[digitIndex] === mostCommonDigit);
    digitIndex += 1;
  }

  digitIndex = 0;

  while (scrubber.length !== 1) {
    const { oneQuantity, zeroQuantity } = digitMapGenerator(scrubber, digitIndex);
    const leastCommonDigit = oneQuantity >= zeroQuantity ? '0' : '1';
    scrubber = scrubber.filter(binary => binary[digitIndex] === leastCommonDigit);
    digitIndex += 1;
  }

  const oxygenRate = parseInt(oxygen[0], 2), scrubberRate = parseInt(scrubber[0], 2);

  console.log(oxygenRate * scrubberRate);
  return oxygenRate * scrubberRate;
}

diagnostic()