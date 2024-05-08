/* Find Minimum and Maximum Value */
const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

let minValue = arr[0];
let maxValue = arr[0];

// console.log(minValue, maxValue);

for (i = 0; i <= arr.length; i++) {
  if (arr[i] < minValue) {
    minValue = arr[i];
  }
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}

console.log(minValue, maxValue);
