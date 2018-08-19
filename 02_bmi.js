////////////////////////////////////////////////////////
// Body Mass index
////////////////////////////////////////////////////////
let bmi = function(weight, height) {
	// return "Body Mass Index (BMI): " + ((weight/ (height ** 2)) * 703) + " kilograms/ meters squared";

	let bmiResult = "Body Mass Index (BMI)= " + ((weight/ (height ** 2)) * 703) + " kilograms/ meters squared";
	console.log(bmiResult);
	alert(bmiResult);
}

let promptHeightWeight = function() {
	let weight = parseInt(prompt("Enter weight in pounds: "));
	let height = parseInt(prompt("Enter height in inches: "));

	console.log(weight + " is type: " + typeof(weight));
	console.log(height + " is type: " + typeof(height));

	bmi(weight, height);
}

promptHeightWeight();



