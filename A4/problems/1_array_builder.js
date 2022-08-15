/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  let arr = []
  let idx = 0
  for (let key in count) {
    for (i = 0; i < count[key]; i++) {
        arr[idx] = key        
        idx++
    }
  }
  return arr
}
// console.log(arrayBuilder({'cats': 2, 'dogs': 1}))

function arrayBuilder2(count) {
  let arr = []
  for (let key in count) {
    for (i = 0; i < count[key]; i++) {
        arr.push(key)        // Why didn't this work? // I had [key] instead of (key)
    }
  }
  return arr
}
// console.log(arrayBuilder2({'cats': 2, 'dogs': 1}))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
