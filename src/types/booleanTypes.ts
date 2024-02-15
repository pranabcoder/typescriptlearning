/*
Example of boolean type
*/

let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// expression of true and false

booleanValue = typeof "abc" === "string"; // true
booleanValue = 1 > 0; // true

/*
booleanValue = {}  -> error - Type '{}' is not assignable to type 'boolean'.

booleanValue = "New York"; -> error - Type '"New York"' is not assignable to type 'boolean'.

booleanValue = null;  -> error - Type 'null' is not assignable to type 'boolean'.
booleanValue = undefined;-> error - Type 'undefined' is not assignable to type 'boolean'.
*/