const words = ["If","the","Easter","Bunny","and","the","Tooth","Fairy","had","babies","would","they","take","your","teeth","and","leave","chocolate","for","you"]
let sentence = ""
let wordCount = 0

const addExcitement = (word, delimiter, count) => {
    sentence += ` ${word}${(++wordCount % 3 === 0) ? delimiter.repeat(count) : ""}`
    console.log(sentence)
}

words.forEach(word => addExcitement(word, "🐰", 2))