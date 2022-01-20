// JavaScript Numbers Are Stored in 64-bit
// Numbers	            Exponent	        Sign
// 52 bits(0 - 51)	    11 bits(52- 62)	    1 bit(63)

const a = 3;
const b = 3.13;
const a1 = 5e9;
console.log(a1); //5000000000

const a2 = 5e-5;
console.log(a2); // 0.00005

const a3 = 0xff;
console.log(a3); // 255


// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns 900719925124740999n

// JavaScript Number Methods
/*
Here is a list of built-in number methods in JavaScript.

Method	                        Description
isNaN()	                        determines whether the passed value is NaN
isFinite()	                    determines whether the passed value is a finite number
isInteger()	                    determines whether the passed value is an integer
isSafeInteger()	                determines whether the passed value is a safe integer
parseFloat(string)	            converts the numeric floating string to floating-point number
parseInt(string, [radix])	    converts the numeric string to integer
toExponential(fractionDigits)	returns a string value for a number in exponential notation
toFixed(digits)	                returns a string value for a number in fixed-point notation
toPrecision()	                returns a string value for a number to a specified precision
toString([radix])	            returns a string value in a specified radix(base)
valueof()	                    returns the numbers value
toLocaleString()	            returns a string with a language sensitive representation of a number
*/