/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  let splitArr = sentence.split(' ')
  for (i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === "I") {
      splitArr[i] = "we"
    } else if (splitArr[i] === "mine") {
      splitArr[i] = "ours"
    } else if (splitArr[i] === "my") {
      splitArr[i] = "our"
    } else if (splitArr[i] === "me") {
      splitArr[i] = "us"
    }
  }
  return splitArr.join(' ')
}
console.log(royalWe("This is my house and you will respect me"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
