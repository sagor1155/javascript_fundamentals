/*
TYPE CONVERSION:
----------------
Refs: https://www.programiz.com/javascript/type-conversion

There are two types of type conversion in JavaScript.
    1. Implicit Conversion - automatic type conversion
    2. Explicit Conversion - manual type conversion
*/ 


// Example 1: Implicit Conversion to String
function implicitConversionToString(){
    // numeric string used with + gives string type
    // Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.
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

// Example 2: Implicit Conversion to Number
function implicitConversionToNumber(){
    // numeric string used with - , / , * results number type

    let result;

    result = '4' - '2'; 
    console.log(result); // 2

    result = '4' - 2;
    console.log(result); // 2

    result = '4' * 2;
    console.log(result); // 8

    result = '4' / 2;
    console.log(result); // 2
}

// Example 3: Non-numeric String Results to NaN
function nonNumericStringToNaN(){
    // non-numeric string used with - , / , * results to NaN

    let result;

    result = 'hello' - 'world';
    console.log(result); // NaN

    result = '4' - 'hello';
    console.log(result); // NaN
}


function implicitBooleanToNumber() {
    // if boolean is used, true is 1, false is 0
    // Note: JavaScript considers 0 as false and all non-zero number as true. 
    // And, if true is converted to a number, the result is always 1.
    let result;

    result = '4' - true;
    console.log(result); // 3

    result = 4 + true;
    console.log(result); // 5

    result = 4 + false;
    console.log(result); // 4
}

function implicitNullConversionToNumber(){
   // null is 0 when used with number
    let result;

    result = 4 + null;
    console.log(result);  // 4

    result = 4 - null;
    console.log(result);  // 4 
}

implicitConversionToString()
console.log("**********************")
implicitConversionToNumber()
console.log("**********************")
nonNumericStringToNaN()
console.log("**********************")
implicitBooleanToNumber()
console.log("**********************")
implicitNullConversionToNumber()
console.log("**********************")


// explicit conversion 

function explicitConversionToNumber(){
    let result;

    // string to number
    result = Number('324');
    console.log(result); // 324
    
    result = Number('324e-1')  
    console.log(result); // 32.4
    
    // boolean to number
    result = Number(true);
    console.log(result); // 1
    
    result = Number(false);
    console.log(result); // 0   

    // In JavaScript, empty strings and null values return 0. For example,
    result = Number(null);
    console.log(result);  // 0

    let result = Number(' ')
    console.log(result);  // 0

    // If a string is an invalid number, the result will be NaN. For example,
    let result;
    result = Number('hello');
    console.log(result); // NaN

    result = Number(undefined);
    console.log(result); // NaN

    result = Number(NaN);
    console.log(result); // NaN

    // Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,
    let result;
    result = parseInt('20.01');
    console.log(result); // 20

    result = parseFloat('20.01');
    console.log(result); // 20.01

    result = +'20.01';
    console.log(result); // 20.01

    result = Math.floor('20.01');
    console.log(result); // 20
}

