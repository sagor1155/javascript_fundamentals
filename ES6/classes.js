class User {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }

    // getter 
    get username() {
        return this.name
    }

    // setter 
    set username(name) {
        this.name = name
    }

    // method
    sayMyName(){
        console.log(this.name)
    }

}

const user1 = new User('Bob', 30, 'bob@gmail.com')
const user2 = new User('Moly', 30, 'moly@gmail.com')

console.log(user1.email)
console.log(user2.email)

user1.sayMyName()
user2.sayMyName()

user1.username = 'Amanda'
console.log(user1.name)
console.log(user1.username)

// Inheritance
// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {
    constructor(name){
        super(name)

        // Overriding an occupation property
        this.occupation = 'Student';
    }

    // overriding methods
    greet(){
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let student = new Student("dsagor")
student.greet()
