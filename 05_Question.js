/* Sort the elements */
const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// const res = arr.sort((a, b) => b - a); /* Largest to Lowest */
const res2 = arr.sort((a, b) => a - b); /* Lowest to Largest */

// console.log(res);
// console.log(res2);

const sortArray = (arr) => {
  for (i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
    for (j = 0; j <= arr.length - 1 - i; j++) {
      console.log(arr[j]);
      console.log("checl", arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    return arr;
  }
};

console.log(sortArray(arr));
// sortArray(arr);
