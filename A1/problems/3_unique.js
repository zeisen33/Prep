/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  let newArray = []
  for (i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      newArray.push(array[i])
    }
  }
  return newArray

  // let arr = []
  // for (i = 1; i < array.length; i++) {
  //   if (arr.indexOf(array[i]) === -1) {
  //     arr.push(array[i])
  //   } 
  // }
  // return arr
}
console.log(unique([1, 1, 2, 3, 3]))
console.log(unique([1, 3, 6, 7, 1, 3, 5]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
