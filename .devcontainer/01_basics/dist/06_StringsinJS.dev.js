"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var string = "string";
console.log(string);
var NewString = new String('yogesh');
console.log(NewString);
console.log(_typeof(string), NewString);
console.log(NewString.toUpperCase());
console.log(string.toUpperCase());
var array = ["geetesh", "bhaiaya"];
var CopyArray = array;
console.log(array);
CopyArray.forEach(function (item) {
  return item.toUpperCase();
});
console.log(array);
console.log(CopyArray);