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

// let age = 25;

// if(age > 18){
//     console.log("You can vote");
// }

// if(age < 18){
//     console.log("You can not vote");
// }

// let mode = "light";
// let color;

// // if(mode === "dark"){
// //     color = "black";
// // }

// // if(mode === "light"){
// //     color = "white";
// // }

// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }

// console.log(color);

// let x = 10;

// if(x%2 === 0){
//     console.log(x," is even.");
// }
// else{
//     console.log(x," is odd.");
// }

// // Ternary Operator

// age >= 18 ? console.log("Adult") :  console.log("Not Adult");


// Practice Question 3

// let num = prompt("Enter a number : ");

// if(num%5 === 0){
//     console.log(num," is a multiple of five.");
// }
// else{
//     console.log(num," is not a multiple of five.");
// }

// // Practice Question 4

// let score = prompt("Enter your score : ");
// let grade;

// if(score >= 80 && score <= 100){
//     grade = "A";
// }
// else if(score >= 70 && score <= 79){
//     grade = "B";
// }
// else if(score >= 60 && score <= 69){
//     grade = "C";
// }
// else if(score >= 50 && score <= 59){
//     grade = "D";
// }
// else if(score >= 0 && score <= 49){
//     grade = "F";
// }

// console.log("Your Grade is : ",grade);

// Loops

// for(let i=0; i<5; i++){
//     console.log("i = ",i);
// }

// // Calculate Sum of 1 to 100

// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum += i;
// }
// console.log("The Sum is : ",sum);

// // While Loop

// let i=1;
// while(i<=10){
//     console.log("Md Mihran Sohail");
//     i++;
// }

// // Do While Loop

// let j = 20;
// do{
//     console.log("Md Mihran Sohail");
//     i++;
// }while(i <= 10);

// for - off Loop

// let str = "Lenovo";

// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }

// console.log("string size = ",size);

// // for - in Loop

// let student = {
//     name : "Rahul Kumar",
//     age : 20,
//     cgpa : 8.6,
//     isPass : true,
// };

// for(let i in student){
//     console.log(i, " = ",student[i]);
// }

// Practice Question 5

// Print all even numbers from 0 to 100

// for(let i=2; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// // Practice Queastion 6

// // Guess The Game Number 
// let x;
// let y = 35;
//     x = prompt("Guess the number : ");
// while(x != y){
//     if(x > y){
//         x = prompt("Your Number is Greater.");
//     }
//     else{
//         x = prompt("Your Number is Smaller.");
//     }
// }
// console.log("Congratulation !! You have won the game");

// Template Literals

// const obj = {
//     item : "Pen",
//     price : 20,
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees`; // This is a Template Literal
// console.log(output);

// Practice Question 7

// let name = prompt("Enter Your Full Name : ");
// let username = "@" + name + name.length;
// console.log("Your Suggested Username : ",username);


// Arrays in JavaScript
// Practice Question 8

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for(let i=0; i<marks.length; i++){
//     sum += marks[i];
// }

// console.log("The average Marks of the entire class : ",sum/marks.length);

// // Practice Question 9

// let prices = [250,645,300,900,50];

// for(let i=0; i<prices.length; i++){
//     prices[i] = prices[i] - prices[i]/10;
// }

// console.log(prices);

// let heroes = ["Antman", "Ironman"];
// heroes.unshift("Superman");

// console.log(heroes);

// heroes.shift();
// console.log(heroes);

// let arr = [1,2,3,4,5,6,7,8];

// arr.splice(3,2,104,105);
// console.log(arr);

// // Practice Question 10

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");

// console.log(companies);


// Functions in JavaScript

// Arrow Function 

// const arrowSum = (a, b) => {
//     console.log(a+b);
// }

// const arrowMult = (a, b) => {
//     console.log(a * b);
// }

// arrowSum(3,4);
// arrowMult(4,5);

// Practice Question 11

// function numOfVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" 
//            || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
//             count ++;
//         }
//     }
//     return count;
// }

// let str = prompt("Enter a word (string) : ");
// console.log("The number of vowels in the given string are : ", numOfVowels(str));

// Practice Question 12

// const numOfVowels = (str) => {
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" 
//            || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
//             count ++;
//         }
//     }
//     return count;
// }

// let str = prompt("Enter a word (string) : ");
// console.log("The number of vowels in the given string are : ", numOfVowels(str));


// ForEach Loop in Arrays (Higher Order Function)

// let arr = [1,2,3,4,5];

// arr.forEach(function printArr(val){
//     console.log(val);
// })

// let strArr = ["Mumbai", "Pune", "Hyderabad"];

// strArr.forEach( (val, idx, array) => {
//     console.log(val.toUpperCase(), idx, array);
// })


// Practice Question 13

let nums = [21,32,45,87,27];

let calcSquare = (val) => {
    console.log(val*val);
}

nums.forEach(calcSquare);

