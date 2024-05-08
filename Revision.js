/* TODO: Find the 2nd last element in an Array */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const secondLastElement = arr[arr.length - 2];
// console.log(secondLastElement);

/* TODO: SUM USING REDUCE AND LOOP */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const sumOfArray = arr.reduce((acc, curr) => {
//   return (acc = acc + curr);
// }, 0);

// console.log(sumOfArray);

// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

/* TODO: Remove Duplicate from an Array */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 40, 80, 90];

// const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueArray);

// const uniqueArray = [...new Set(arr)];
// console.log(uniqueArray);

// const removeDuplicate = (arr) => {
//   let uniqueArray = [];

//   arr.map((item, index) => {
//     if (!uniqueArray.includes(item)) {
//       uniqueArray.push(item);
//     }
//   });
//   return uniqueArray;
// };

// console.log(removeDuplicate(arr));

/* TODO: Find Minimum and Maximum value in an Array */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let minValue = arr[0];
// let maxValue = arr[0];

// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] < minValue) {
//     minValue = arr[i];
//   }
//   if (arr[i] > maxValue) {
//     maxValue = arr[i];
//   }
// }

// console.log(minValue, maxValue);

// TODO: SORT THE ARRAY
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

// const sortedArray = (arr) => {
//   for (i = 0; i <= arr.length - 1; i++) {
//     for (j = 0; j <= arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// const res = sortedArray(arr);
// console.log("Result",res);
