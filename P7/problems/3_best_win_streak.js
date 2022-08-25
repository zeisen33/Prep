/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  let bestStreak = 0
  let currentStreak = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'W') {
      currentStreak++
    }
    if (currentStreak >= bestStreak) {
      bestStreak = currentStreak
    }
    if (str[i] === 'L') {
      currentStreak = 0
    }
  }
  return bestStreak
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
