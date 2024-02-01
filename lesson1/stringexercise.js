let firstname = "John";
let lastname = "Doe";
//methods to concatenate strings
console.log(firstname + " " + lastname); //output is John Doe
console.log(`${firstname} ${lastname}`); //output is John Doe
console.log(firstname.concat(" ", lastname)); //output is John Doe

//methods to find length of string
let stringWithLenght = "Hello World";
console.log(stringWithLenght.length); //output is 4
console.log(`${stringWithLenght} length is => ${stringWithLenght.length}`); //output is 4

//name printout
let name = "Sanjay";
let printoutVariable = `My name is ${name}`;
console.log(printoutVariable); //output is My name is Sanjay

//Substring
let subStringVariable = "Javascript is fun";
subStringLogic = subStringVariable.substring(11, 13);
console.log(subStringLogic);
console.log(subStringLogic.length);

//toUpperCase and toLowerCase
let mixedCaseString = "MiXeD CaSe";

console.log(mixedCaseString.toUpperCase());
console.log(mixedCaseString.toLowerCase());

//string replace

let stringReplace = "I love Javascript";
console.log(stringReplace.replace("Javascript", "coding"));

let stringReplace2 = "I love Javascript";
console.log(stringReplace2.replace(/Javascript/g, "coding"));
