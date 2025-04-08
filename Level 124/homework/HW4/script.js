let words = ["javascript", "is", "a", "powerful", "programming", "language"]

let reversedSentence = words.reduceRight((sentence, word, index, array) => {
    if (index === 0) {
        return sentence + word + "."
    } else {
        return sentence + word + " "
    }
}, "")

console.log("original words:", words)
console.log("reversed sentence:", reversedSentence)
