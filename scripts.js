const cowsay = require("cowsay");
const math = require("./math.js");
const data = require("./data.js");
const sum = require("./sum.js");
const lodash = require("lodash");

console.log(cowsay.think({text: "Moo"}));
console.log("hello world");


console.log(math.addTwoNumbers(2, 3));
console.log(math.addThreeNumbers(2, 3, 10));
console.log(`${data.array1} ${data.name} is from ${data.hometown}`);
// console.log(data.array1);
// console.log(data.hometown);
console.log(sum.sumArray(data.array1));
console.log(lodash.shuffle(data.array1));