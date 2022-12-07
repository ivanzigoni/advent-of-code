const fs = require('fs');

const input = fs.readFileSync('./day7.input.txt', 'utf-8').split('\n');

class Dir {
  path;
  parentDir;
  size = 0;

  constructor(path) {
    this.path = path;
  }

  setSize(file) {
    const [size] = file.split(' ');
    this.size += Number(size);
  }

  addFile(file) {
    this.setSize(file);
    if (this.parentDir) {
      this.parentDir.addFile(file);
    }
  }
}

const root = new Dir('/');

function part1and2(
  dirMap = { '/': root },
  currentDir = root, 
  index = 0
  ) {
    
  const line = input[index];
  
  if (!line) {
    const spaceAvailable = (70000000 - dirMap['/'].size);
    const selectForDeletion = (x) => x + spaceAvailable >= 30000000;

    console.log(
      Object.values(dirMap)
        .sort((a, b) => b.size - a.size)
        .reduce((acc, dir) => {
        if (dir.size <= 100000) {
          acc.result += dir.size;
        }

        if (selectForDeletion(dir.size)) {
          acc.dirForDeletion = dir;
        }

        return acc;
      }, { result: 0, dirForDeletion: {} })
    )
    return;
  }

  if (line[0] === '$') {
    // command

    const [_, command, destination] = line.split(' ');

    if (command === 'cd') {

      if (destination === '..') {
        currentDir = currentDir.parentDir;
      } else {
        currentDir = dirMap[`${currentDir.path}/${destination}`];
      }

    } else if (command === 'ls') {

    }

  } else if (line[0] === 'd') {
    // directory

    const [_, dirName] = line.split(' ');
    
    let path = `${currentDir.path}/${dirName}`;
    
    if (!dirMap[path]) {
      const newDir = new Dir(path)
      newDir.parentDir = currentDir;

      dirMap[path] = newDir;
    }


  } else {
    // file

    const file = line
    currentDir.addFile(file);
  }

  return part1and2(dirMap, currentDir, index += 1)
}

part1and2();