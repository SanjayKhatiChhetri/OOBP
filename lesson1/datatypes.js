let someVariable = 5; // let is used to declare a variable which can be changed later

const someConstant = 10; // const is used to declare a constant variable which cannot be changed later

let someString = "Hello World"; // string data type is used to store text data type and is declared using double quotes

console.log(typeof someVariable); // output is number

console.log(typeof someString); // output is string

// boolean data type can have only two possible values true or false

if (someConstant > 10) {
  console.log("someConstant is greater than 10");
}

console.log(someConstant > 10, "someConstant is greater than 10");
/*
Falsy values:
undefined
null
0
-0
NaN
"" */
//example of undefined data type with boolean data type

let someUndefinedVariable = undefined;
console.log(
  someUndefinedVariable == undefined,
  "give true or false depending upon variable"
); //output is true

let example = null;
let example2;
// compare with ==
console.log(6 == "6", "6 == '6'"); //output is true

let base10number = 12;
let base16number = 0xc;

console.log(Number.MAX_SAFE_INTEGER);

const value1 = 9007199254740991 + 1;
const value2 = 9007199254740991 + 2;

console.log(value1 === value2, "value1 === value2"); //output is true

let decimal = 12.5;
console.log(typeof base10number, "typeof base10number"); //output is number

//string data type
let hello = "Hello World";
console.log(hello.length, "length of string"); //output is 11

console.log(hello.includes("World")); //output is true

let singleQuoteString = "Hello World";
let doubleQuoteString = "Hello World";
let backtickString = `Hello World`;

console.log(singleQuoteString, doubleQuoteString, backtickString);

let thisYear = 2024;
let thisDay = 15;
let thisMonth = "January";

let today = `Hello World, today is ${thisDay} ${thisMonth} ${thisYear}`;
console.log(today);
