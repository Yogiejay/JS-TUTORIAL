"use strict";

var Array = [1, 2, 3, 4];
var CopyArray = Array;
console.log(Array);
console.log(CopyArray);
Array.push(2);
console.log(Array);
console.log(CopyArray);
var vars = 10;
var varss = vars;
console.log(vars);
console.log(varss);
vars++;
console.log(vars);
console.log(varss);
var id = Symbol('123');
var anotherid = Symbol('123');
console.log(id, anotherid);