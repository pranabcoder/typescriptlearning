/*
Example of void type =>

const addNumbers = () => {
    console.log(1 + 2);
};

addNumbers(); // 3

Example of never type
*/

const throwNewError = (): never => {
    throw new Error('Error');
};
throwNewError(); // Error: Error
