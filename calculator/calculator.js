function add (num1,num2) {
	return num1 + num2;
}

function subtract (num1,num2) {
	return num1 - num2;
}

function sum (array) {
	var sum = 0;
	for (var i=0; i < array.length; i++){
		sum = array[i] + sum; 
	}
	return sum;
}

function multiply (array) {
	var prd = 1;
	for (var i=0; i < array.length; i++){
		prd = array[i] * prd; 
	}
	return prd;
}

function power(num1,num2) {
	return Math.pow(num1,num2);	
}

function factorial(num) {
	var factorial = 1;
	for (var i=num; i>1; i--){
		factorial = i * factorial;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}