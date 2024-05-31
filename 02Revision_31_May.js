/* TODO:  Find the Second Last element in the Array */

/* const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr[arr.length - 2]); */

/*TODO: SUM of Element */
/* const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum = arr[i] + sum;
// }

// console.log(sum);

const res = arr.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);

console.log(res); */

/* TODO: Remove Duplicate Element in an Array */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 50, 70, 90];

// const res = arr.filter((value, index) => arr.indexOf(value) === index);
// console.log(res);

// const uniqueElement = [...new Set(arr)];
// console.log(uniqueElement);

// const uniqueArray = [];
// for (i = 0; i < arr.length; i++) {
//   if (!uniqueArray.includes(arr[i])) {
//     uniqueArray.push(arr[i]);
//   }
// }

// console.log(uniqueArray);

/*TODO: Find Minimum and Maximum Value */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let min = arr[0];
// let max = arr[0];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(min, max);

/*TODO: Reverse an Array*/
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const reverseArray = [];

// for (i = arr.length - 1; i > 0; i--) {
//   reverseArray.push(arr[i]);
// }
// console.log(reverseArray);

/* TODO: Find Element Occurence in an Array */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// const element = 40;
// let count = 0;

// const ElementOccurence = (arr, element) => {
//   for (i = 0; i <= arr.length; i++) {
//     if (element === arr[i]) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(ElementOccurence(arr, element));

/*TODO: Element occurence of all the elements */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40, 40, 40];

// count = {};

// for (i = 0; i < arr.length; i++) {
//   let element = arr[i];

//   if (count[element]) {
//     count[element]++;
//   } else {
//     count[element] = 1;
//   }
// }

// console.log(count);

/* TODO: Captilise 1st Letter */
// const stringArray = ["hello", "world", "i", "am", "ankush thakur", "yadav sharma"];

// const result = stringArray.map((arr) => {
//   const spiltArray = arr.split(" ");
//   //   console.log(spiltArray);
//   const res = spiltArray.map((arr) => arr.charAt(0).toUpperCase() + arr.substring(1));
//   return res.join(" ");
// });

// console.log(result);

const string = "hello my name is ankush thakur, i am living here from past seven months";

const splitString = string.split(" ");

const finalResult = splitString.map((arr) => arr.charAt(0).toUpperCase() + arr.substring(1));

// Join the words back into a single string
const capitalizedString = finalResult.join(" ");

// Remove the comma
const cleanedString = capitalizedString.replace(/,/, "");
