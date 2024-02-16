/*
Example of undefined data type


let user: string;
console.log(user); // undefined
*/

/*
Example of null data type
*/

let saveButton = document.getElementById('save');
console.log(saveButton); // null


/*
In this example, we have a list of users and we want to find the user that is logged in.
Here we don't have the value of the loggedInUsername variable, so TS is showing to protect 
us from an undefined value that cause run time error.


let loggedInUsername: string;

const users = [
    {name: 'Obby', age: 20},
    {name: 'Jake', age: 30},
];

const loggedInUser = users.find((user) => user.name === loggedInUsername);

console.log(loggedInUser.age); // Error: Object is possibly 'undefined'.
*/