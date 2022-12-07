const fs = require('fs');

const input = fs.readFileSync('./day7.input.txt', 'utf-8').split('\n');

class Dir {
  name;
  parentDir;
  size = 0;

  constructor(name) {
    this.name = name;
  }

  setSize(file) {
    const [size] = file.split(' ');
    this.size += +size;
  }

  addFile(file) {
    this.setSize(file);
    if (this.parentDir) {
      this.parentDir.addFile(file);
    }
  }
}

const root = new Dir('/')

function part1(
  dirMap = { '/': root },
  currentDir = root, 
  index = 0
  ) {
    
  const line = input[index];
  
  if (!line) {
    console.log(
      Object.values(dirMap).reduce((acc, dir) => {
        if (dir.size <= 100000) {
          acc.result += dir.size;
        }
        if (dir.parentDir) {
          acc.onlyParent += dir.parentDir.size;
        }
        acc.total += dir.size
        return acc;
      }, { result: 0, total: 0, onlyParent: 0 })
    )
    return
  }

  if (line[0] === '$') {
    // command

    const [_, command, destination] = line.split(' ')

    if (command === 'cd') {

      if (destination === '..') {
        currentDir = currentDir.parentDir;
      } else {
        currentDir = dirMap[destination];
      }

    } else if (command === 'ls') {

    }

  } else if (line[0] === 'd') {
    // directory
    const [_, dirName] = line.split(' ')
    
    if (!dirMap[dirName]) {
      const newDir = new Dir(dirName)
      newDir.parentDir = currentDir;

      dirMap[dirName] = newDir;
    }


  } else {
    // file

    const file = line
    currentDir.addFile(file);
  }

  return part1(dirMap, currentDir, index += 1)
}

part1();