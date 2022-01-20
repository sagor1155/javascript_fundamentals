let str = "hello"; // primitive string

// Access String Characters
console.log(str[0]);
console.log(str.charAt(2));

// strings are immutable 
str[0] = 'H';
console.log(str);

// case-sensitive 
const a = 'a';
const b = 'A';
console.log(a == b); // false
console.log(a === b); // false

// multiline string
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.';

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.';

// using backtick 
const message3 = `This is a long message
that spans across multiple lines
in the code.`;

console.log(message1);
console.log(message2);
console.log(message3);

// string objects 
const strPrim = 'hello'; // primitive string
const strObj  = new String('hello'); // string objects
console.log(typeof(strPrim)); // "string"
console.log(typeof(strObj)); // "object"
/* Note: It is recommended to avoid using string objects. 
   Using string objects slows down the program.
*/

// string methods
/*
Here are the commonly used JavaScript String methods:

Method	                Description
charAt(index)	        returns the character at the specified index
concat()	            joins two or more strings
replace()	            replaces a string with another string
split()	                converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	    returns a part of a string
toLowerCase()	        returns the passed string in lower case
toUpperCase()	        returns the passed string in upper case
trim()	                removes whitespace from the strings
includes()	            searches for a string and returns a boolean value
search()	            searches for a string and returns a position of a match
*/

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';


// charAt
console.log(text1.charAt(0))

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = result1.split(' ');
console.log(result4); // [ 'hello', 'world' ]

// slicing the string
const result5= text1.slice(2, 4);
console.log(result5); // "ll"


// iterate over string
const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}