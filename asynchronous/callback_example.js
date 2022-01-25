// In JavaScript, you can also pass a function as an argument to a function. 
// This function that is passed as an argument inside of another function is called a callback function.

function greet(name, callback) {
    console.log(`Listen ${name}`)
    callback()
}

function callMe(){
    console.log('I am the danger')
}

greet('kristen', callMe)

// Benefit of Callback Function
// The benefit of using a callback function is that you can wait for the result of a previous function call and 
// then execute another function call.

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', callMe);

/** 
 * Note: The callback function is helpful when you have to wait for a result that takes time. 
 * For example, the data coming from a server because it takes time for data to arrive.
*/