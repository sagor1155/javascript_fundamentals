// Object literal
// Object Literal is generally used to create a single object
const Person = {
    name: 'Johny',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); },

    // getter methods are used to access the properties of an object
    get getName() {
        return this.name
    },

    set setName(value) {
        this.name = value
    }
};

// adding property 
Person.height = 5.6
Person.setName = "Larry"
console.log(Person.getName)
Person.greet();
console.log(Person)


// constructor function
// constructor function is used to create multiple object 
function Employee(name){
    this.name = name

    this.assignTask = function(){
        console.log("Assigning task to " + this.name)
    }
    // define property: getter
    Object.defineProperty(this, "getName", {
        get: function(){
            return this.name
        }
    })
    // define property: setter 
    Object.defineProperty(this, "setName", {
        set: function(value){
            this.name = value
        }
    })
}

// adding new property to a constructor function
Employee.prototype.age = 30

// instantiate object of a constructor function
let emp = new Employee("Shawn")
emp.age = 29  

// adding new property to object
emp.gender = "Male"

// setter  
emp.setName = "Shawn Dep"

// getter 
console.log(emp.getName + " : ", emp.age)

emp.assignTask()
console.log(emp)