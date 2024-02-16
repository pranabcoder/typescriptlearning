/*
Example of Read-only array
*/

let list: readonly number[] = [1, 2, 3];

/*
list.push(4); => Error: Cannot assign to 'push' because it is a read-only property. 

Example of Read-only tuple
*/

type readonlyPerson = readonly [string, string, number];

const newPerson: readonlyPerson = ["John", "Doe", 30];

