/*
Examples of Arrays in TS
*/

let arrayOne: number[] = [1, 2, 3, 4, 5]; // Array of numbers

let arrayTwo: Array<string> = ["one", "two", "three", "four", "five"]; // Array of strings

let arrayThree: (string | number)[] = [1, "two", 3, "four", 5]; // Mixed array

/* 
Example custom type array
*/

type NewAirplane = {
    flightNumber: string;
    airplaneModel: string;
    dateOfDeparture: string;
    timeOfDeparture: string;
    source: string;
    destination: string;
    seats: {
        orderProperty: string; // Order property
        [key: string | number]: string | number; // Index signature
    };
};

type Airplanes = NewAirplane[]; // Array of Airplane objects

const airplaneArray: Airplanes = [
    {
        flightNumber: "AI202",
        airplaneModel: "Boeing 747",
        dateOfDeparture: "2021-06-01",
        timeOfDeparture: "10:00",
        source: "DEL",
        destination: "BOM",
        seats: {
            orderProperty: "A1",
            "10A": "Mark Thomas",
            "10B": "John Jacobs",
        },
    },
    {
        flightNumber: "AI203",
        airplaneModel: "Boeing 747",
        dateOfDeparture: "2021-06-01",
        timeOfDeparture: "10:00",
        source: "BOM",
        destination: "DEL",
        seats: {
            orderProperty: "A1",
            "10A": "Mark Thomas",
            "10B": "John Deo",
        },
    },
];