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

const student = {
    name : "Md Mihran Sohail",
    age : 17,
    cgpa : 8.7,
    isPass : true,
};

console.log(student);
console.log(student["age"]);

student["age"] = student["age"] + 1;
console.log(student.age);