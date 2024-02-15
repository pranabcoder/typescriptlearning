/*
Example - String type in TS
*/

let myString: string = "John";

let fullName: string = myString + " Doe";

fullName.split(" "); // ["John", "Doe"]
/*
fullName = 123456; => Error: Type '123456' is not assignable to type 'string'
Math.log(fullName); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
*/
