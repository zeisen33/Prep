/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/
function oneUserName(str) {
  let firstLastArr = str.split(' ')
  let username = (firstLastArr[0][0] + firstLastArr[1]).toLowerCase()
  return username
}

function usernames(names) {
  let finalArr = []
  for (let i = 0; i < names.length; i++) {
    finalArr.push(oneUserName(names[i]))
  }
  return finalArr
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
