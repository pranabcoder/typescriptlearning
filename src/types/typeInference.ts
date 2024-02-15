/*
Example of Type Inference
*/

let myName = 'Max'; // Type string
let age = 30; // Type number
let hasHobbies = true; // Type boolean

let finalResult: number; // Type number

function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}
finalResult = addNumbers(2, 3);