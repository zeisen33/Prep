/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function nickname(name) {
    let lowerNick = ''
    let lowerNick2 = ''
    let vowelCount = 0
    for (let i = 0; i < name.length; i++) {
        
        if (vowelCount === 2) {
            break
        }
        if (vowels.includes(name[i])) {
            vowelCount++
        }
        lowerNick += name[i].toUpperCase()
        lowerNick2 += name[i].toUpperCase()
    }
    return lowerNick + '-' +lowerNick2
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
