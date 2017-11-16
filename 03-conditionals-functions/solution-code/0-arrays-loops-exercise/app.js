/**
 * Arrays + Iteration
 */

/**
 * Question 1
 * Create a variable called numbers containing an array of numbers using 1, 2, 3, 
 * and 4 as values.
 * Use a map function to increase each value by 1, storing the result
 * in a new array with the name q1. The end result should be a second array of
 * numbers with the values 2, 3, 4, and 5.
 */

// Your code here

"use strict"
let numbers = [1,2,3,4];
let q1 = numbers.map(function(element) {
	return element + 1;
});
console.log("Question 1: " + q1);

/**
 * Question 2
 * Using the numbers array from Question 1, find the average of the numbers in
 * the array (average = sum of all numbers/number of numbers). Store the average
 * in a variable named q2.
 */

 // Your code here

let total = 0;
numbers.forEach(function(element){
	total += element;
});
let q2 = total / numbers.length;
console.log("Question 2: " + q2);


/**
 * BONUS:
 * Question 3
 * Create an variable called q3 containing an array of numbers using 1, 2, 3, 
 * and 4 as values.
 * Use a forEach function to increase each value by 1, updating the values
 * in the original array. This should result in the original array you created
 * storing the values 2, 3, 4, and 5.
 * (Hint: Read about the index parameter for the forEach method: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 */

// Your code here

// forEach function
let q3 = [1,2,3,4];
q3.forEach(function(element, index){
	q3[index] = element + 1;
});
console.log("Question 3: " + q3);

// or written as a for loop
// let q3 = [1,2,3,4];
// for (let i = 0; i < q3.length; i++) {
// 	 q3[i]++;
// }
// console.log("Question 3: " + q3);
