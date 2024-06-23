`
Counting digit(s) of a given integer
`
const prompt = require("prompt-sync")({sigint: true})

function countingDigit(number) {
    let count = 0
    while(number > 0) {
        number = Math.trunc(number / 10)
        count++;
    }   
    return count
}

console.log(countingDigit(parseInt(prompt("Input an integer: "))))
