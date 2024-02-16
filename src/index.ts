/*
Example of Object type
*/

let Person = {
    name: "John",
    age: 30,
};

/*
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

The way of declaring object type is not recommended. We can use type alias or interface to declare object type.
Example of type alias
*/

type Article = {
    author: string;
    content: string;
    title: string;
    image?: string; // Optional property
};

let article: Article = {
    author: "Stella",
    content: "Hello World",
    title: "My First Article",
};

let post: Article = {
    author: "Sam",
    content: "Hello World",
    title: "My Second Article",
};