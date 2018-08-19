////////////////////////////////////////////////////////
// Math JS
////////////////////////////////////////////////////////

// Add function.
let add = function(number1, number2) {
	return number1 + number2;
}
// Subtract function.
let subtract = function(number1, number2) {
	return number1 - number2;
}
// Multiply function.
let multiply = function(number1, number2) {
	return number1 * number2;
}
// Divide function.
let divide = function(number1, number2) {
	return number1 / number2;
}
// Exponentiation Function.
let exponent = function(number1, number2) {
	return number1 ** number2;
}

// // 1. Takes in user input as string.
// var number1 = prompt("Enter a number:");
// var number2 = prompt("Enter another number:");

// 4. Convert user input into integer number.
let number1 = parseInt(prompt("Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));

// // 1. Opens alert with return value of add function.
// alert(add(10,5));

// // 2. Echo back to user the user input from prompt.
// alert(number1);

// // 3. Display return value of add function.
// alert(add(number1, number2));

// 5. Display return value of add function.
let addResult = add(number1, number2);
console.log(typeof(addResult));
alert(number1 + " + " + number2 + " = " + addResult);

let subtractResult = subtract(number1, number2);
console.log(typeof(subtractResult));
alert(number1 + " - " + number2 + " = " + subtractResult);

let multiplyResult = multiply(number1, number2);
console.log(typeof(multiplyResult));
alert(number1 + " * " + number2 + " = " + multiplyResult);

let divideResult = divide(number1, number2);
console.log(typeof(divideResult));
alert(number1 + " / " + number2 + " = " + divideResult);

let exponentResult = exponent(number1, number2);
console.log(typeof(exponentResult));
alert(number1 + " ** " + number2 + " = " + exponentResult);