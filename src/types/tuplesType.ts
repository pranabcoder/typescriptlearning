/* 
Example of tuples in TypeScript
*/

// firstName, lastName, age

let person: [string, string, number];
person = ['John', 'Doe', 30];

/*
Example of optional type in Tuples
*/

let person2: [string, string, number?];
person2 = ['John', 'Doe'];

/*
Example of heterogeneous type in Tuples
*/

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, 'John', 'Stella', 'Mark'];
const failingStudents: listOfStudents = [2, false, 'John', 'Robert'];