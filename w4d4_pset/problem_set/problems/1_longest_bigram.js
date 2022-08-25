/***********************************************************************
Write a function `longestBigram(sentence)` that takes in a sentence
string and returns the longest bigram in the sentence. A bigram is a
pair of consecutive words.
When returning the bigram, include the space between the words. Assume
there will be no punctuation. In the case of a tie, return the earlier
bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
***********************************************************************/
function bigrams(sen) {
    let words = sen.split(' ')
    let newArr = []
    for (let i = 0; i < words.length - 1; i++) {
        newArr.push(words[i] + ' ' + words[i + 1]) 
    }
    return newArr
}
//console.log(bigrams(('measure twice cut once')))

function longestBigram(sentence) {
    let pairs = bigrams(sentence)
    let longest = pairs[0]
    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i].length > longest.length) {
            longest = pairs[i]
        }
    }
    return longest
}
console.log(longestBigram('measure twice cut once'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
 module.exports = longestBigram;
