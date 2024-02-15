/* Example of BigInt */

let bigIntNumber = BigInt(945845);

let bigIntNumber2 = 1234564564n;

console.log(bigIntNumber);

/*
 Why bigInt?
*/

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne); // 9007199254740992
console.log(safeIntPlusTwo); // 9007199254740992

console.log(safeIntPlusOne === safeIntPlusTwo); // true

let a: bigint = BigInt(12345678);
let b: bigint = 23456465n;
let c: bigint = a - b;
/*
let e: bigint = 24551.2n; // Error: Type '24551.2n' is not assignable to type 'bigint'.
let f = Math.log(a); // Error: Argument of type 'bigint' is not assignable to parameter of type 'number'.
*/