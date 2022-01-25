// The setTimeout() method executes a block of code after the specified time. 
// The method executes the code only once.
// Syntax: setTimeout(function, millisecond)

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 2000)

console.log('This line gets printed first')

let count = 0;
// display time every 2 second
function showTime() {
    let date = new Date()
    let time = date.toLocaleTimeString()
    console.log(time)
    count++
    let id = setTimeout(showTime, 2000)
    
    if (count==5){
        clearTimeout(id)
    }
}

showTime()

// You can also pass additional arguments to the setTimeout() method. The syntax is:
// setTimeout(function, milliseconds, parameter1, ....paramenterN);
// When you pass additional parameters to the setTimeout() method, 
// these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

function greet2(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setTimeout
setTimeout(greet2, 1000, 'John', 'Doe');
