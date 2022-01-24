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
