/* SUM of Element */

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Using Reduce Method
// const result = arr.reduce((acc, curr) => {
//   return (acc = acc + curr);
// });

// console.log(result);

// Using For Loop
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum);
