"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var score = 33;
console.log(_typeof(score));
var scores = "abc&$";
console.log(_typeof(scores));
var ConvertIntoNumber = Number(scores);
console.log(_typeof(ConvertIntoNumber));
console.log(ConvertIntoNumber);

if ("sr") {
  console.log(false);
} else {
  console.log(true);
}