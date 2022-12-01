const fs = require("fs");

const input = fs.readFileSync('./day1.input.txt', 'utf-8');

function part1() {

  const { biggest } = input.split("\n").reduce((acc, calory) => {

    if (calory === '') {
      if (acc.currentCount > acc.biggest) {
        acc.biggest = acc.currentCount;
      }

      acc.currentCount = 0;
    } else {
      acc.currentCount += Number(calory); 
    }
    
    return acc;
  }, {
    biggest: 0,
    currentCount: 0
  });

  console.log(biggest);
  return biggest;
}

// part1();

function part2() {
  const { first, second, third } = input.split("\n").reduce((acc, calory) => {

    if (calory === '') {
      if (acc.currentCount > acc.first) {
        acc.first = acc.currentCount;
      } else if (acc.currentCount > acc.second) {
        acc.second = acc.currentCount;
      } else if (acc.currentCount > acc.third) {
        acc.third = acc.currentCount;
      }

      acc.currentCount = 0;
    } else {
      acc.currentCount += Number(calory); 
    }
    
    return acc;
  }, {
    first: 0,
    second: 0,
    third: 0,
    currentCount: 0
  });

  console.log(first + second + third);
  return first + second + third;
}

part2();