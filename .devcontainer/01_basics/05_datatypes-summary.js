let Array = [1, 2, 3, 4];
let CopyArray = Array;
console.log(Array)
console.log(CopyArray)
Array.push(2);
console.log(Array)
console.log(CopyArray)

let vars = 10
let varss = vars
console.log(vars)
console.log(varss)
vars++
console.log(vars)
console.log(varss)

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id, anotherid)