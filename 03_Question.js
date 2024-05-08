/* Remove Duplicate Element in an Array */
/* arr.indexOf(item) returns the index of the FIRST occurrence of the item in the array arr.  */

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 50, 70, 90];

/* Using Filter */
// const res = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(res);

// Using SET
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// console.log(arr.map((item, index) => arr.indexOf(item) === index));

const removeDuplicate = (arr) => {
  let uniqueArray = [];

  arr.map((item, index) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
};

console.log(removeDuplicate(arr));
