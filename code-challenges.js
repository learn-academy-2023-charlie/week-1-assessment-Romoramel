// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: number
// output: string going above 350 boiling point or below 42 boiling point.
// process: number above, below and at 212.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// const boiling = (temp) => {
//     if(temp > 212) {
//         return {temp} is above boiling.
//     }
//     else if(temp < 212) {
//         return {temp} is below boiling PointerEvent
//     }
//     else {
//         return {temp} is at boiling PointerEvent.
//     }
// }

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input: arrays
// output: concated arrays
// process: link arrays then get length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input: string
// output: the string backwards
// process: use .split .reverse and .join

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

// const stringReverse = currentCohort.split("").reverse().join("")
// console.log(stringReverse)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// inpiut: array
// output: index of last occurance of the number
// process: use .length and last index methods to get desired output

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// console.log(numberOfConnections.lastIndexOf(givenValue1));
// console.log(numberOfConnections.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: array
// output: array sorted largest to smallest
// process: sorted function

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// const sortArray = (array1) => {
//     return array1.sort((a, b) => b - a)
// }

// console.log(sortArray(sanDiegoSummerTemperatures))
// console.log(sortArray(sanDiegoWinterTemperatures)) 