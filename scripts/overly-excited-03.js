const words = ["If","the","Easter","Bunny","and","the","Tooth","Fairy","had","babies","would","they","take","your","teeth","and","leave","chocolate","for","you"]

const sentenceGenerator = function* (words, delimiter, count) {
    let buildMeUp = ""
    let wordCount = 0

    while (true) {
        buildMeUp += `${words[wordCount]}${ (wordCount + 1) % 3 === 0 ? delimiter.repeat(count) : ""} `
        wordCount++
        yield buildMeUp
    }
}

const buildSentence = sentenceGenerator(words, "🐰", 2)

words.forEach(() => console.log(buildSentence.next().value))
