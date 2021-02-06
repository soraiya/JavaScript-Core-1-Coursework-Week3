// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiplied100 = numbers.map(function multiply(number) {
    return number * 100;
})

//remove function name
var numbersMultiplied100 = numbers.map(function (number) {
    return number * 100;
})

//arrow function
var numbersMultiplied100 = numbers.map(number => {
    return number * 100;
})

//implicit return
var numbersMultiplied100 = numbers.map(number => number * 100);

console.log(numbersMultiplied100);