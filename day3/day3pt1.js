const fs = require('fs');


function funcReadFile(err, data) {

  const directions = data.toString();
  const map = {};
  let current = [0, 0];
  
  for (let i = 0; i < directions.length; i += 1) {
    switch(directions[i]) {
      case '<':
        const left = [current[0] - 1, current[1]];
        map[JSON.stringify(left)] = true;
        current = left;
        break;
      case '>':
        const right = [current[0] + 1, current[1]];
        map[JSON.stringify(right)] = true;
        current = right;
        break;
      case '^':
        const up = [current[0], current[1] - 1];
        map[JSON.stringify(up)] = true;
        current = up;
        break;
      case 'v':
        const down = [current[0], current[1] + 1];
        map[JSON.stringify(down)] = true;
        current = down;
        break;
   }
  }

  console.log(Object.keys(map).length);
}

fs.readFile('./input.txt', funcReadFile)