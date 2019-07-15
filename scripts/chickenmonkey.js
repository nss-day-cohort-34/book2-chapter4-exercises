for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    let output = ""
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        output += "Chicken"
    }
    if (currentNumber % 7 === 0) {
        output += "Monkey"
    }
    if (output !== "") console.log(`${currentNumber}: ${output}`)
}
