function countWords(sentence) {
  let words = sentence.toLowerCase().split(" ")
  let wordCount = new Map()

  for (let word of words) {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1)
    } else {
      wordCount.set(word, 1)
    }
  }

  return wordCount
}

let sentence = "my name is luka"
let result = countWords(sentence)
console.log(result)
