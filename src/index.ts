class PersonNew {
  protected name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getName(): string {
    return this.name;
  }
}

class NewAdmin extends PersonNew {
  public returnName(): string {
    return this.name;
  }
}


const p1:PersonNew = new PersonNew("John", 30);
console.log(p1.getName());
const admin: NewAdmin = new NewAdmin("Mark", 42);
console.log(admin);
/*this is not allowed as name is protected and can only be accessed within the class and its subclasses
console.log(admin.name);
*/
console.log(admin.returnName());

