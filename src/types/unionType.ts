type Dog = {
    name: string;
    barks: boolean;
    wags: boolean;
};

type Cat = {
    name: string;
    purrs: boolean;
};

type DogAndCatUnion = Dog | Cat; // Union type

let dog: DogAndCatUnion = {
    name: "Fido",
    barks: true,
    wags: true,
};

let cat: DogAndCatUnion = {
    name: "Mittens",
    purrs: true,
};

let dogAndCat: DogAndCatUnion = {
    name: "Hybrid",
    barks: true,
    wags: true,
    purrs: true
};

/*
Example Union types in primitive types
*/
type stringOrNumber = string | number;
function addNumberOrString(a: stringOrNumber, b: stringOrNumber): stringOrNumber {
    
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

console.log(addNumberOrString(1, 2)); // 3
console.log(addNumberOrString('Mark', 2)); // Mark2