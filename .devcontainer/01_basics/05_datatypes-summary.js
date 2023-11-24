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

// callbyvalue and callburefrence
//CALLBYVALUE IT just copies the address of given varibale at initialization
//callby refrence it refrences the actual refrence of a varibale generally array object function
// let var1 = function addition(a, b) {
//     return a + b;
// };
// let var2 = var1;
// var1 = addition(2, 3)
// console.log(var2())
// var1 = addition(3, 4)
// console.log(var2())

function addition(a, b) {
    return a + b;
}

let var1 = addition(2, 3);
let var2 = var1;
console.log(var2);
var1 = addition(3, 4);
console.log(var2); // Output: 5



