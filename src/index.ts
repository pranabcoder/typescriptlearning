
/*
Example 1 - basic declaration of a function
*/
function intro (name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`
}
console.log(intro('John', 30)); // Hello, my name is John and I am 30 years old.

/*
Example 2 - function declaration with function expression 
*/

const intro2 = function intro(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};
console.log(intro2('John', 31)); // Hello, my name is John and I am 31 years old.

/*
Example 3 - function declaration with arrow function
*/

const intro3 = (name: string, age: number): string => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};

console.log(intro3('John', 32)); // Hello, my name is John and I am 32 years old.

