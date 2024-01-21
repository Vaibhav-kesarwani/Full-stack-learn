// arrow functions

function sum(a, b) {
  return a + b;
}

// or

const summ = (a, b) => {
  return a + b;
};

// map

const arr = [1, 2, 3, 4, 5, 6];

console.log("Original array: " + arr);
console.log("Updated array: " + arr.map((x) => x * 2));

// filter

const a = [1, 2, 3, 4, 5, 6];

const ans = a.filter((x) => x % 2 === 0);
console.log(ans);
