// functions that use function() syntax, allow hoisting
function add1(a, b) {
 return a + b;
}

// arrow functions do not allow hoisting
const add2 = (a, b) => a + b;

console.log("Add1 -> " + add1(1, 2))
console.log("Add2 -> " + add2(1, 2))

let a = ["Bob", "Alice", "Jane"]
let b = ["Gustavo", "David"]


// spread operator, or just use an array, pls
const join = (a, b) => [...a, ...b];

console.log("Join on (a, b) -> ", join(a, b))
console.log("Add1 on ...a -> ", add1(...a))

