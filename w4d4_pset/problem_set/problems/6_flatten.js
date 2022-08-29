/***********************************************************************
A 1-dimensional array is also known as a flat array.
Write a function `flatten(data)` that accepts a single parameter. The
function should take in an array of any dimension and return the 1-dimensional
version of that array. Solve this recursively.

HINTS:
 - if the parameter is not an array, then we have reached the base case
 - we can use `Array.isArray(data)` to check if data is an array:
      Array.isArray([1,2,3]); //=> true
      Array.isArray(42); //=> false

EXAMPLES:
var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
flatten(array1); // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

var array2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
flatten(array2); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

flatten('base case'); // => [ 'base case' ]

ANOTHER HINT:
From the last example, you may be confused. We said that the function takes
in an array as a parameter, but we passed it a string?!?
If data is not an array, then we can consider it as a 0-dimensional array.

    0-dimensional array: 'some data'
    1-dimensional array: ['some data']
    2-dimensional array: [['some data']]
    3-dimensional array: [[['some data']]]

This line of thinking will help you frame the recursion
in your brain. (programmer.mind === 'blown')
***********************************************************************/

function flatten(data) {
    let flattened = []
    if (typeof(data) === 'string') {
        return [data]
    }
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {   
            flattened = flattened.concat(flatten(data[i]))
        }  else {
            flattened.push(data[i])
        }
    }
    return flattened  
}

function flatten2(data) {
    let flattened = []
    if (typeof(data) === 'string') {
        return [data]
    }
    let flattify = function(info) {
        for (let i = 0; i < info.length; i++) {
            if (Array.isArray(info[i])) {
                flattify(info[i])
            } else {
                flattened.push(info[i])
            }
        }
    }
    flattify(data)    
    return flattened
}

// console.log(flatten2([0,4,'jfkl;da']))
// console.log([0, 1].concat(['the']))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = flatten;
