const words = ["If","the","Easter","Bunny","and","the","Tooth","Fairy","had","babies","would","they","take","your","teeth","and","leave","chocolate","for","you"]


function addExcitement (theWordArray, delimiter, count) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += `${theWordArray[i]}${(i + 1) % 3 === 0 ? delimiter.repeat(count) : ""} `
        console.log(buildMeUp)
    }
}

addExcitement(words, "🧚🏽", 2)