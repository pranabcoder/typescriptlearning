
/* First Console Log Example =>
console.log('Hello, world From TypeScript!!');
*/

/* Example of Any type in TypeScript => */

let firstName: any = 'Mark';

/* Then provide a number */
firstName = 10; // No error
/*TS not Complaining anything due to Any type */

/* Then provide an array of numbers */
firstName = [1, 2, 3]; // No error
/*TS not Complaining anything due to Any type */