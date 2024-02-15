/*
Example of Object type
*/

let Person = {
    name: "John",
    age: 30,
};

let car: {
    color: string;
    brand: string;
} =  {
    color: "red",
    brand: "BMW",
};

let article : {
    author: string;
    content: string;
    title: string;
    image?: string; // Optional property
};

article = {
    author: "Stella",
    content: "Hello World",
    title: "My First Article",
};