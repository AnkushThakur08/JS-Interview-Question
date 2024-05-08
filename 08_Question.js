/* Element occurence of all the elements */
const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40, 40, 40];

let count = {};

for (i = 0; i < arr.length; i++) {
  let element = arr[i];

  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log(count);
