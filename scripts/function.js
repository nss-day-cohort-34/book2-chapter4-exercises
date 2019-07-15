const bugSquasher = function (bug, squasher) {
    return `The ${bug} was squashed by the ${squasher}`
}

const squashResult = bugSquasher("Beetle", "Boot")

squashResult = bugSquasher("Beetle", "Boot")
console.log(squashResult)

