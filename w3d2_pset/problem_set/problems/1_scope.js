// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/1_scope.js`

var foo = 5;

function bar() {
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo);   // 5
console.log(bar()); // 'Anthony is home'     -- wrong since line 9 doesn't do anything
console.log(foo);   // 5
