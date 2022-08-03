// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    return num % 2 === 1
  }

function isOdd2(num) {
    if (num % 2 === 1) {
        return true
    }   else {
        return false
    }

} 
// console.log(isOdd(47))
// console.log(isOdd(16))
// console.log(isOdd2(756))
// console.log(isOdd2(3))

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return num + 5
  }

// console.log(plusFive(17))
// console.log(plusFive(-1.6))  

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
function threeOrSeven(num) {
    return (num % 3 === 0 || num % 7 === 0)
}

function threeOrSeven2(num) {
    if (num % 3 === 0) {
        return true }
    if (num % 7 === 0) {
        return true }
    return false
}

// console.log(threeOrSeven(6))
// console.log(threeOrSeven(14))
// console.log(threeOrSeven(5))
// console.log(threeOrSeven(21))
// console.log(threeOrSeven2(6))
// console.log(threeOrSeven2(14))
// console.log(threeOrSeven2(5))
// console.log(threeOrSeven2(21))

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
    console.log('Hello, ' + str)
  }

// hello('Zane')  

// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
    return string.toUpperCase() + '!!!'
  }

// console.log(yell("I'm yelling"))  

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    return '...' + string.toLowerCase() + '...'
  }

// console.log(whisper("I'm Whispering"))  

// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
    let lowerSearchString = searchString.toLowerCase()
    let lowerSubString = subString.toLowerCase()
    return lowerSearchString.indexOf(lowerSubString) !== -1
    }
    
function isSubstring2(searchString, subString) {
    let lowerSearchString = searchString.toLowerCase()
    let lowerSubString = subString.toLowerCase()
    if (lowerSearchString.indexOf(lowerSubString) !== -1) {
        return true
    }   else {return false} 
    }

// console.log(isSubstring("The cat went to the store", "he cat went")) 
// console.log(isSubstring2("The cat went to the store", "he cat went"))    
// console.log(isSubstring("Time to program", "time"))
// console.log(isSubstring2("Time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))
// console.log(isSubstring2("Jump for joy", "joys"))

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
function echo(string) {
    return string.toUpperCase() + "..." + string + "..." + string.toLowerCase()
  }

// console.log(echo("Mom!"))
// console.log(echo("bippity BOOPITY"))  

// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
    return !isOdd(num)
  }

// console.log(isEven(4))
// console.log(isEven(7))  

// Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4)/4
}

// console.log(averageOfFour(5,6,7,8))
// console.log(averageOfFour(1,2,3,4))



// Typing

// function sayHello(name) {
//     var msg = 'Hello, ' + name + '. How are you?';
//     return msg;
//   }
  
//   console.log(sayHello('bootcamp prep')); // feel free to change the string being passed
function sayHello(name) {
    var msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Zane'))


//   function checkNumber(num) {
//     if (num > 0) {
//       return 'positive';
//     } else if (num < 0) {
//       return 'negative';
//     } else {
//       return 'zero';
//     }
//   }
  
//   console.log(checkNumber(5)); // feel free to change the number being passed

function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
 }
console.log(checkNumber(17)) 
console.log(checkNumber(-5))   

// Order of Operations
// Evaluate each expression. Check your answer in the Node REPL.

// 1 + 1 * 5                 // 6

// (1 + 1) * 5               // 10

// 1 + 2 - 5 / 6 - 1         // 1.183333333

// 5 * 5 % 13                // 12

// 5/(-1 * (5 - (-10)))      // -0.33333333   



// Truth Table
// Based on the values of A and B from the first two columns, complete the truth table. Check your work in the REPL.

// A	  B	   A && B	A || B
// True	 True	True	 True
// True	 False	False	 True
// False True	False	 True
// False False	False    False


// Truthy or Falsey
// Predict whether these expressions evaluate to true or false. Check your work in the REPL.

// true && true || false                    // true
// true && (false || true)                  // true
// (true || false) && (false || false)      // false
// (true || false) || (false || false)      // true