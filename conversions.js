/*
There are two types of type conversion in JavaScript.

Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion
*/ 

// Example 1: Implicit Conversion to String
function implicitConversionToString(){
    // numeric string used with + gives string type
    let result;

    result = '3' + 2; 
    console.log(result) // "32"

    result = '3' + true; 
    console.log(result); // "3true"

    result = '3' + undefined; 
    console.log(result); // "3undefined"

    result = '3' + null; 
    console.log(result); // "3null"
}
// Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.

