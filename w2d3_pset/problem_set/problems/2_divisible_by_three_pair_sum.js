/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/
function sumMultOfThree(num1, num2) {
    return (num1 + num2) % 3 === 0
}
// console.log(sumMultOfThree(6, 4))

function divisibleByThreePairSum(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && i < j && sumMultOfThree(array[i], array[j])) {
                newArr.push([i, j])
            }
        }
    }
    return newArr

}
// console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = divisibleByThreePairSum;
