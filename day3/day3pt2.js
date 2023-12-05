const fs = require('fs');


function funcReadFile(err, data) {

  const directions = data.toString();
  let current = [[0, 0], [0, 0]];
  const map = {
    santa: {},
    robot: {},
  };
  
  for (let i = 0; i < directions.length; i += 1) {
    if (i % 2 === 0) {
      switch(directions[i]) {
        case '<':
          const left = [current[0][0] - 1, current[0][1]]
          map.santa[JSON.stringify(left)] = true;
          current[0] = left;
          break;
        case '>':
          const right = [current[0][0] + 1, current[0][1]]
          map.santa[JSON.stringify(right)] = true;
          current[0] = right;
          break;
        case '^':
          const up = [current[0][0], current[0][1] - 1]
          map.santa[JSON.stringify(up)] = true;
          current[0] = up;
          break;
        case 'v':
          const down = [current[0][0], current[0][1] + 1]
          map.santa[JSON.stringify(down)] = true;
          current[0] = down;
          break;
     }
    } else {
      switch(directions[i]) {
        case '<':
          const left = [current[1][0] - 1, current[1][1]]
          map.robot[JSON.stringify(left)] = true;
          current[1] = left;
          break;
        case '>':
          const right = [current[1][0] + 1, current[1][1]]
          map.robot[JSON.stringify(right)] = true;
          current[1] = right;
          break;
        case '^':
          const up = [current[1][0], current[1][1] - 1]
          map.robot[JSON.stringify(up)] = true;
          current[1] = up;
          break;
        case 'v':
          const down = [current[1][0], current[1][1] + 1]
          map.robot[JSON.stringify(down)] = true;
          current[1] = down;
          break;
     }
    }
  }

  const result = { ...map.robot, ...map.santa};
  console.log(Object.values(result).length);

}

fs.readFile('./input.txt', funcReadFile)