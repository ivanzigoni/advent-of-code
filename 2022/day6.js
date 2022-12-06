const fs = require('fs');

const rawInput = fs.readFileSync('./day6.input.txt', 'utf-8');

function part1() {

  
  // for (let i = 0; i < rawInput.length; i += 1) {
  //   let map = {}

  //   for (let k = i; k < i + 4; k += 1) {
  //     map[rawInput[k]] = true
  //   }

  //   if (Object.values(map).length === 4) {
  //     console.log(i + 4)
  //     return i + 4;
  //   } else {
  //     map = {}
  //   }
  // }

  for (let i = 0; i < rawInput.length; i += 1) {
    let map = {}

    for (let k = i; k < i + 14; k += 1) {
      (map[rawInput[k]] = true)
    }

    if (Object.values(map).length === 14) {
      console.log(i + 14)
      return i + 14;
    } else {
      map = {}
    }
  }

}

part1();