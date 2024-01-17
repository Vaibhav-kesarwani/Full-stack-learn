"use strict";

const { ChildProcess } = require("child_process");
// function sumOfSomething(a, b , myFunction) {
//     let num1 = myFunction(a);
//     let num2 = myFunction(b);

//     return num1 + num2;
// }

// sumOfSomething(1, 2, (n) => {
//     console.log(n * n);
// });

// function onDone(content) {
//     console.log(content);
// }

// readFile("a.txt", onDone);

// console.log("Hello world!");

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("Hello world!");

// write file.

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     data = data + " Kya haal chaal";

// fs.writeFile();

//     console.log(data);
// });

// Promises

// const a = new Promise();

// function myOwnSetTimeout(duration) {
//   const p = new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });

//   return p;
// }

// myOwnSetTimeout(1000).then(() => {
//   console.log("Hello there!");
// });

// function myOwnSetTimeout() {
//   return new Promise((resolve) => {
//     resolve("Hello there!");
//   });
// }

// async function onDone() {
//   let a = await myOwnSetTimeout();
//   console.log(a);
// }

// onDone();