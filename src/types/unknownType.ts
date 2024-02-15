/*
Example of unknown type  
*/

function multiplyByTwo(number: unknown){

    if(typeof number === 'number'){
        return number * 2;
    }
    return "Please provide a valid number";
}

console.log(multiplyByTwo(2)); // 4

console.log(multiplyByTwo('2')); // Please provide a valid number
