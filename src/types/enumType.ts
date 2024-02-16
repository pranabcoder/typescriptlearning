import { Roles } from './enumsRoles';

/*
We can try the different ways to declare an enum
*/
enum RolesInAnotherWay {
    admin = 'admin',
    author = 'author',
    editor = 'editor',
};

type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles;
};

console.log(Roles.author); // 1
console.log(RolesInAnotherWay.admin); // admin

const personOne: Person = {
    name: 'John',
    email: 'john@example.com',
    password: 'Test123',
    role: Roles.author,
};

console.log(personOne); // { name: 'John', email: 'john@example.com', password: 'Test123', role: 1 }	


