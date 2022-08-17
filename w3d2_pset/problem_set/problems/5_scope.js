// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/4_scope.js`

var bar = "dance";

function foo() {
  bar = 10;

  var innerFoo = function() {
    var bar = 15;
  }

  console.log("2: " + bar); //2: 10
  innerFoo();
  console.log("3: " + bar); //3: 15  // Actually 10 because the scope of this bar is foo(), not innerFoo()
}

console.log("1: " + bar); //1: 'dance'
foo();
console.log("4: " + bar); //4: 10
