let array2 = [1, 2, 3, 4, 5];
let array3 = [5, 6, 7, 8, 9];

function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
    return sum ;
}

console.log(sumArray(array2));
console.log(sumArray(array3));

module.exports = {
    sumArray: sumArray,
}