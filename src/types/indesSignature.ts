type MyAirplane = {
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

const flightOne: MyAirplane = {
    flightNumber: "AI202",
    airplaneModel: "Airbus A320",
    dateOfDeparture: "2021-05-01",
    timeOfDeparture: "14:30",
    source: "DEL",
    destination: "BOM",
    seats: {
        orderProperty: "some value", // Add the missing orderProperty
        "10A": "Mark Thomas",
        "10B": "John Jacobs",
    }
};