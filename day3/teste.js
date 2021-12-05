const directions = {
    '^': 0,
    'v': 0,
    '>': 0,
    '<': 0
}

if (directions['>'] === directions['^'] === directions['v']) {
    console.log('oi')
}