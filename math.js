function addTwoNumbers(numOne, numTwo){
    return numOne + numTwo;
};

// console.log(addTwoNumbers(2, 3));
module.exports = addTwoNumbers;

function addThreeNumbers(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
};

console.log(addTwoNumbers(2, 3));
// module.exports = addTwoNumbers;

let total = 2;


module.exports = {
    addTwoNumbers: addTwoNumbers,
    addThreeNumbers: addThreeNumbers,
    total: total,

}