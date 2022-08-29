/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/

function isogramMatcher(string1, string2) {
    let samePosition = 0
    let diffPosition = 0
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2[i]) {
            samePosition++
        } else {
            for (let j = 0; j < string1.length; j++) {
                if (string1[i] === string2[j]) {
                    diffPosition++
                }
            }
        }
    }
    return [samePosition, diffPosition]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isogramMatcher;
