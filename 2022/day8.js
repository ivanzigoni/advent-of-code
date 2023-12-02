/*

form matrix[]

for each element:
    loop through y[pos] and x[pos]:
        check if y[pos] or x[pos] < element === false



example: element on x[6], y[5]
    verify if x[0...x.length] < x[6] OR y[0...y.length] < y[5]


function that receives line
    checks visibility


*/


const fs = require("fs");

const input = fs.readFileSync("./day8.input.txt", "utf-8")
    .split("\n")
    .map(row => row.split("").map(st => Number(st)));


function checkLine(row, targetIndex) {
    // typeof line === num[]
    // typeof targetIndex === number

    const target = row[targetIndex];

    let leftVisibility = true,
        rightVisibility = true,
        eol = false,
        i = 1;


    while (!eol) {

        const left = row[targetIndex - i]
        const right = row[targetIndex + i];

        if (!left && !right) {
            eol = true;
        }

        if (left && left >= target) {
            leftVisibility = false;
        }

        if (right && right >= target) {
            rightVisibility = false;
        }

        i++

    }

    return rightVisibility || leftVisibility || false;

}


function main() {


    let counter = 0;

    for (let i = 1; i < input.length - 1; i++) {

        const row = input[i];

        for (let k = 1; k < row.length - 1; k++) {

            const rowRes = checkLine(row, k);

            const col = input.map(row => row[k]);

            const colRes = checkLine(col, i);

            if (rowRes || colRes) {
                counter += 1;
            }

        }

    }

    console.log((input.length * 2) + ((input[0].length - 2) * 2))

    console.log(counter + (input.length * 2) + ((input[0].length - 2) * 2));

}

main();

// const tarr = [1, 2, 3, 4, 5];
//
//
// for (let i = 1; i < tarr.length - 1; i++) {
//     console.log(tarr[i])
// }