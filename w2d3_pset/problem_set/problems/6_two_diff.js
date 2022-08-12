/***********************************************************************
Write a function `twoDiff(array)`, given an array of numbers, return a 2-D 
array, where each of the sub array are indices of the two numbers such 
that their difference is 2. If there are no such numbers, return an empty
array.

NOTE: The pairs are unique.
HINT: Account for negative difference too!

//Example:
// twoDiff([2, 3, 4, 6, 1, 7]) // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5]) // => [[0, 1], [1, 2], [3,4]]
// twoDiff([]) // => []
***********************************************************************/


function twoDiff(array){
    let finalArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i < j && (array[i] - array[j] === 2 || array[i] - array[j] === -2)) {
                finalArr.push([i,j])
            }
        }
    }
    return finalArr
}
console.log(twoDiff([]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDiff;