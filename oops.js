// oop
// simple object
let circle = {
    radius : 1, // properties
    location : {
        x: 1, 
        y: 1
    },
    draw : function() { // methods
        console.log('draw')
    }
}

circle.draw()

// factory function 
function createCircle(radius) {
    return {
        radius : radius, //or simple use - radius,
        draw: function() {
            console.log('draw circle with radius ' + radius)
        }
    }
}

const newCircle = createCircle(5)
newCircle.draw()

// constructor function 
function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw circle with radius ' + this.radius)
    }
}

const another = new Circle()  
// 1st - new operator will create empty object
// then it will set 'this' to point to that object
// finally it will return that object from the function 
// no need to use explicit return statement 
another.radius = 10
another.draw()


// functions are objects
// when we declare a function, javascript engine internally 
// use 'Function' constructor to create the object like as follows - 
const Circle1 = new Function('radius', `
this.radius = radius
this.draw = function() {
    console.log('draw circle with radius ' + this.radius)
}
`)

const circle1 = new Circle1(23)

// use 'call' method on function object instead of 'new' operator
Circle.call({}, 1)
// another way
Circle.apply({}, [1])


// Value vs Reference types
// primitive/value types - String, Number, Boolean, undefined, null
// Reference type - Objects, Array, Function 
let x = {value : 10}
let y = x // copying the reference, so changing the 'x' will affect 'y'
x.value = 20
console.log(y)
// Primitives are copied by their value 
// Objects are copied by their reference 


// Adding/Removing Properties
// objects in javascript are dynamic, so you can add/delete properties dynamically 
function Rectangle(height) {
    this.height = height
    this.draw = function() {
        console.log('draw rectangle with height ' + this.height)
    }
}

const rect = new Rectangle(10)
rect.location = {x : 1} // adds property dynamically 
rect['location'].y = 2
console.log(rect)

delete rect.location // deletes property dynamically 
console.log(rect)


// Enumerating properties of object 
for (let key in rect) {
    if (typeof circle[key] !== 'function') {
        console.log(key, rect[key])
    }
}
// another approach to get all keys 
const keys = Object.keys(rect)
console.log(keys)
// check key existance 
if ('height' in rect) {
    console.log('rectangle has height')
}


// Abstraction
// use 'let' keyword to make it private 
function Rectangle2(height) {
    this.height = height

    // local variable acts as private members
    let defaultLocation = {x : 0, y : 0}
    
    // local variable acts as private members
    let computeOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function() {
        computeOptimumLocation(0.1)
        console.log('draw rectangle with height ' + this.height)
    }

    // getter and setter 
    this.getDefaultLocation = function() {
        return defaultLocation
    }

    // define property 
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location.')

            defaultLocation = value
        }
    })
}

const rect2 = new Rectangle2(15)
console.log(rect2.getDefaultLocation())
rect2.defaultLocation = {x:2, y:3} // set
rect2.draw()