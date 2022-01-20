// Exceptions: try, catch, finally
try{
    console.log(a)
} catch(err) {
    console.log("found some error!")
} finally {
    console.log("finally executed")
}


// try...catch in setTimeout
// The try...catch won't catch the exception if it happened in "timed" code, like in setTimeout(). 
try{
    setTimeout(function(){
        // console.log(a)
    }, 3000)
} catch(err) {
    console.log( "won't work" );
}
// The above try...catch won't work because the engine has already left the 
// try..catch construct and the function is executed later.

// The try..catch block must be inside that function 
// to catch an exception inside a timed function. For example,
setTimeout(function(){
    try {
        console.log(a)
    } catch(e) {
        console.log("error is caught")
    }
}, 3000)


// throw: 
const number = 40;
try {
    if(number > 50) {
        console.log('Success');
    }
    else {
        // user-defined throw statement
        throw new Error("The number is low!")
    }
    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}