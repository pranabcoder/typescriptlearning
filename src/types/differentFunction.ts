
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

/*
Example 4 - function declaration with optional parameters
*/

const intro4 = (name: string, age: number, country?: string): string => {
  if (country) {
    return `Optional parameters example - Hello, my name is ${name} and I am ${age} years old. I am from ${country}.`;
  }
  return `Optional parameters example - Hello, my name is ${name} and I am ${age} years old.`;
};
console.log(intro4('John', 33)); // Hello, my name is John and I am 33 years old.
console.log(intro4('John', 34, 'USA')); // Hello, my name is John and I am 34 years old. I am from USA.

/*
Example5 =  Custom Parameters and Return Types
*/

enum AgeUnit {
  years = 'years',
  months = 'months',
};
type Person = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    county?: string;
};

const personOne: Person = {
  name: 'Scott',
  age: 35,
  ageUnit: AgeUnit.years,
  county: 'USA',
};

const convertAgeToMonths = (person: Person): Person => {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
};

console.log(convertAgeToMonths(personOne)); // { name: 'Scott', age: 420, ageUnit: 'months', country: 'USA' }

/*
Example 6= Functional Call Signature
*/

type greetingFunction = (greeting: string) => string;

type Person2 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country?: string;
  greet: greetingFunction;
  toString: () => string; // Adding toString method
};
const greeting = (greeting: string): string => {
  return `Hello, ${greeting}`;
};

const personTwo: Person2 = {
    name: 'John Person2',
    age: 35,
    ageUnit: AgeUnit.years,
    country: 'USA',
    greet: greeting,
    toString: function() {
      // Custom toString implementation
      return `${this.greet('everyone')}. My name is ${this.name}, and I am ${this.age} ${this.ageUnit}.`;
      // This will output a greeting and the person's details when personTwo is logged.
    }
};
personTwo.greet('Scott'); // Hello, Scott
console.log(personTwo.greet('Scott')); // Hello, Scott
console.log(personTwo.toString()); // Hello, everyone. My name is John Person2, and I am 35 years.

