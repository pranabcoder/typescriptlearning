/*
Example - CLass and Inheritance
*/

class User{
    name: string;
    email: string;
    age: number;
  
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
  }
  
  class AdminUser extends User{
    isAdmin: boolean;
    usersReporting: number;
    constructor(name: string, email: string, age: number, usersReporting: number){
        super(name, email, age);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
  }
  
  const user: User = new User("John", "john@email.com", 30);
  const adminUser: AdminUser = new AdminUser("Mark", "mark@gmail.com", 31, 7);
  console.log(user);
  console.log(adminUser);