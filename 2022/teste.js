const arr = [
  { key: 1 },
  { key: 5 },
  { key: 3 },
  { key: 2 },
]

console.log(arr.sort((a, b) => b.key - a.key))