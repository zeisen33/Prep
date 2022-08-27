/**************************************************************************************
Write a function `pyramidScheme(base)` that takes in an array of numbers representing
the base of a pyramid. The function should return a two-dimensional array representing
the completed pyramid. To generate an element of the next level of the pyramid,
we sum the elements below and to the left and below and to the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:

          85
        37  48
      15  22  26
   5   10   12   14
 2   3    7    5    9

Example:

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
 [
   [ 85 ],
   [ 37, 48 ],
   [ 15, 22, 26 ],
   [ 5, 10, 12, 14 ],
   [ 2, 3, 7, 5, 9 ]
 ]

var p2 = pyramidScheme([2, 2, 2, 2]);
p2 // =>
 [
   [ 16 ],
   [ 8, 8 ],
   [ 4, 4, 4 ],
   [ 2, 2, 2, 2 ]
 ]


Hint:
  array.unshift is a method we can use to add an element to the front of an array:
    var arr = ['b', 'c'];
    arr.unshift('a');
    arr; // => [ 'a', 'b', 'c' ]

Difficulty: Hard
*************************************************************************************/
function nextLevel(oneDArray) {
  let nextArr = []
  for (let i = 0; i < oneDArray.length - 1; i++) {
    nextArr.push(oneDArray[i] + oneDArray[i + 1])
  }
  return nextArr
}
// console.log(nextLevel([5, 10, 12, 14]))


function pyramidScheme(base) {
  let current1DArr = base
  let newArr =[base]
  for (let i = 0; i < base.length - 1; i++) {
    newArr.unshift(nextLevel(current1DArr))
    current1DArr = newArr[0]
  }
  return newArr
}
// console.log(pyramidScheme([2, 3, 7, 5, 9 ]))

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = pyramidScheme;
