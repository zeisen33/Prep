/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

function toFeet(distances) {
    let newArr = []
    for (let i = 0; i < distances.length; i++) {
        if (distances[i].slice(-1) === ('s' || 'd')) {
            let idxNum = distances[i].indexOf(' ')
            let fullNum = distances[i].slice(0, idxNum)
            newArr.push(fullNum * 3 + ' feet' )
            // console.log(distances[i].indexOf(' '))
            // console.log(distances[i].slice(0, distances[i].indexOf(' ')))
        } else {
            newArr.push(distances[i])
        }
    }
    return newArr
}
var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
