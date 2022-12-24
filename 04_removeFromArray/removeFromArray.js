const removeFromArray = function () {
    // construct a new array from the argumaents passed in to the function and assign it
	// to a new constant variable "args"
	const args = Array.from(arguments);
	
	// take the first element of the constant array variable "args" and assign it to a new
	// constant variable "originalArray"
	const originalArray = args[0];

	// take every element in the original parameter array "args" except for the first element
	// and assign it to a new array variable "whatWeWantRemoved"
	let whatWeWantRemoved = args.slice(1);
	

	// define a function called "checkNum" that takes in a single number in parameters
	// and returns true if is not included in "whatWeWantRemoved" array, and false if it is included
	function checkNum(currentArrayNum) {
		return !whatWeWantRemoved.includes(currentArrayNum);
    }

	// filter the "originalArray" array variable using the "checkNum" function, removing
	// all values in "originalArray" that are included in "whatWeWantRemoved", and
	// assigning the resulting array to a new constant variable "newArray"
	const newArray = originalArray.filter(checkNum);

	// using big arrow notation to define the function to be passed into the filter
	// instead of defining the function separately, like we did with "checkNum"
	// const newArray = originalArray.filter(currentArrayNum => !whatWeWantRemoved.includes(currentArrayNum));

	// return "newArray"
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
