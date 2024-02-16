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

/* Nested Object Type */

type Caterer = {
    name: string;
    address: string;
    phone: number;
};
type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer;
};

const airplane: Airplane = {
    model: "Boeing 737",
    flightNumber: "BA001",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Sky Caterers",
        address: "London",
        phone: 1234567890,
    },
};