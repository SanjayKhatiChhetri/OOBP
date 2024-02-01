let x = 0.4 - 0.3;
let y = 0.5 - 0.4;

console.log(x); //the output is 0.10000000000000003 instead of 0.1
console.log(y); //the output is 0.09999999999999998 instead of 0.1
console.log(x === y); //the output is false instead of true

// if we comapre the difference x and y, x is 0.10000000000000003 which slightly greater than expected diffrence value (0.1)
//and y is  0.09999999999999998 which is slightly less than expected diffrence value (0.1)

/*example of bigint data type*/
let exampleBigInt = 100n; //n is used to indicate bigint data type

console.log(exampleBigInt); //output is 100n

console.log(typeof exampleBigInt); //output is bigint
