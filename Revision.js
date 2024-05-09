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

/* TODO: Element occurence in an Array */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40, 40, 40];
// let element = 40;
// let count = 0;

// const elementOccurence = (arr, element) => {
//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] === element) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(elementOccurence(arr, element));

/* TODO: Element Occurence of all the elements */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40, 40, 40];
// const count = {};

// for (i = 0; i < arr.length; i++) {
//   let element = arr[i];

//   if (count[element]) {
//     count[element]++;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count);

/* TODO: Captilize String */
// const str = "ankush thakur is a good man";

// const strArray = str.split(" ");

// // console.log(strArray);
// strArray.map((item) => console.log(item[0].toUpperCase() + item.substring(1)));

// const strArray = ["ankush thakur", "physic wallah", "wits innovations"];

// strArray.map((item) => {
//   const splittedArray = item.split(" ");
//   splittedArray.map((item) => console.log(item[0].toUpperCase() + item.substring(1)));
// });

/* TODO: Wheter text is palindrome or not */

const isPalindrome = (str) => {
  const cleanstring = str.toLowerCase();

  return cleanstring === cleanstring.split("").reverse().join("");
};

console.log(isPalindrome("ChrOme"));
console.log(isPalindrome("ankush"));
console.log(isPalindrome("11 1"));
