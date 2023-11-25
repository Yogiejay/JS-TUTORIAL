let string = "string";
console.log(string)
let NewString = new String('yogesh');
console.log(NewString);
console.log(typeof string, NewString);
console.log(NewString.toUpperCase())
console.log(string.toUpperCase());

let array = ["geetesh", "bhaiaya"]
let CopyArray = array;
console.log(array);
CopyArray.forEach((item, index) => { CopyArray[index] = item.toUpperCase() });
console.log(array);
console.log(CopyArray);