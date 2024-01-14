// async

// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans += i;
//     }

//     console.log(ans);
// }

// function findSumTill100() {
//     return findSum(100);
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello world");

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data) {
// console.log(data);
// });

// const fs = require("fs");

// function readFile() {
//   return new Promise(function (resolve) {
//     fs.readFile("./a.txt", "utf-8", function (err, data) {
//         resolve(data);
//     });
//   });
// }

// function onDone(data) {
//     console.log(data);
// }

// readFile().then(onDone);

// promise using async await

// function greet() {
//   return new Promise(function (resolve) {
//     resolve("Hello, world!");
//   });
// }

// async function onDone() {
//     let value = await greet();
//     console.log(value);
// }

// onDone();

