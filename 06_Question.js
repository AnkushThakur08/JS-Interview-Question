/* Reverse an Array */
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let reversedArray = [];

for (i = arr.length - 1; i >= 0; i--) {
  reversedArray.push(arr[i]);
}

console.log(reversedArray);
