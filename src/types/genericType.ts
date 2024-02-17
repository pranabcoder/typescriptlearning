/*
Example of Generics
*/

type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];
const filter: Filter = (array, predicate) => {
  let result = [];
  for (let item of array) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

let numbers = [1, 2, 5, 7, 9, 10, 12];

function greaterThanSeven(value: number) {
  return value > 7;
}
console.log(filter(numbers, greaterThanSeven));

let animals = ["cat", "dog", "bird", "fish"];

function filterCats (item: string) {
  return item === "cat";
}
console.log(filter(animals, filterCats));

/*
Implement Map function
*/

const map = <T, U>(array: T[], func: (item: T) => U) => {
  // check if the array is empty
  if (array.length === 0) {
    return array;
  }
  // Create a new array to collect values
  let result = [];
  // Loop through each item and call the function
  for (let item of array) {
    result.push(func(item));
  }
  // return a new array
  return result;
};

let numbers2 = [1, 2, 3, 4, 5];
const convertedString = map(numbers2, (item) => item.toString());
console.log(convertedString);
