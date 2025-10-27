// console.log("Hello World !!");
// console.log("Md Mihran Sohail");


// name = "Tony Stark"
// age = 24;

// x = null;
// y = undefined;

// isFollow = true;

// console.log(isFollow);


// let name = "Tony Stark";
// let age = 24;

// const PI = 3.14;

// console.log(PI);


// Data Types

// let age = 24;
// let name = "Tony Stark";
// let isFollow = true;
// let x = null;
// let y;
// let z = BigInt("12345");
// let a = Symbol("Hello!");

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isFollow);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof a);


// Non-Primitive Data Types

// const student = {
//     name : "Md Mihran Sohail",
//     age : 17,
//     cgpa : 8.7,
//     isPass : true,
// };

// console.log(student);
// console.log(student["age"]);

// student["age"] = student["age"] + 1;
// console.log(student.age);


// // Practice Question 1

// const product = {
//     title : "Parker Jotter Standard CT Ball Pen (Black)",
//     rating : 4,
//     isDeal : true,
//     offer : 5,
//     price : 270,
// };

// console.log(product);

// // Pactice Question 2

// const profile = {
//     username : "CodeWithMihran",
//     isFollow : false,
//     followers : 78,
//     following : 23,
//     posts : 24,
// };

// console.log(profile);
// console.log(typeof profile);
// console.log(typeof profile["isFollow"]);


// Arithmetic Operations

// let x = 5;
// let y = 2;

// console.log("x = ",x," & y = ",y);
// console.log("x + y = ", x+y);
// console.log("x - y = ", x-y);
// console.log("x * y = ", x*y);
// console.log("x / y = ", x/y);
// console.log("x % y = ", x%y);
// console.log("x ** y = ", x**y);

// // Urinary Operators

// x++; 
// console.log("x = ",x);

// y--;
// console.log("y = ",y);


// Conditional Operators

let age = 25;

if(age > 18){
    console.log("You can vote");
}

if(age < 18){
    console.log("You can not vote");
}

let mode = "light";
let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}

console.log(color);

let x = 10;

if(x%2 === 0){
    console.log(x," is even.");
}
else{
    console.log(x," is odd.");
}

// Ternary Operator

age >= 18 ? console.log("Adult") :  console.log("Not Adult");