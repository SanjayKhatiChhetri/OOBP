let A = {
  foo: 1,
  bar: 2,
};

let B = {
  foo: 5,
  bar: 6,
};

console.log(A.foo + B.bar); // 7

let C = A;
C.foo = 10;

// if (A.foo === C.foo){
//     console.log ("is equal by assignment C = A ")
// } else{
//     console.log("False C !== A")
// }
// console.log(C.foo)

console.log(A.foo + B.bar); // is the output 7 or sth else ls
