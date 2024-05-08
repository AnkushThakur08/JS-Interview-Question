/* TODO: Find Element Occurence in an Array */
const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];
let element = 40;
let count = 0;

const elementOccurence = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};

const res = elementOccurence(arr, element);
console.log(res);
