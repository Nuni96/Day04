function main(numOne, numTwo) {
    var myQuotient = parseFloat(numOne/numTwo).toFixed(1);
    return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;