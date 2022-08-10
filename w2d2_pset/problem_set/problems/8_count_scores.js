/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let objOfNames = {}                              // First, make a list of all the names
  for (let i = 0; i < people.length; i++) {
    let name = people[i].name
    let score = people[i].score
     console.log(score)  
    if (objOfNames[name] !== undefined) {
      objOfNames[name] += score
    } else {
      objOfNames[name] = score
    }
    

    // if (listOfNames.includes(people[i].name)) {
    //   continue
    // } else {
    //   listOfNames.push(people[i].name)
    // }
    
  }
 console.log(objOfNames)
  return objOfNames
}

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
