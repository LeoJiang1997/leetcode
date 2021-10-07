// function randArray(len, min, max) {
//   return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
// }

function swap(arr: number[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shellSort(arr: number[]): number[] {
  let length = Math.floor(array.length/2);
  for (let gap = length; gap > 0; gap = Math.floor(gap/2))
    for (let i = gap; i < arr.length; i++) {
      for (let j = i; j > gap - 1; j -= gap) {
        if (arr[j] < arr[j - gap]) {
          swap(arr,j,j-gap);
        }
      }
    }
  return arr;
}

const array = randArray(7, 0, 9);
// console.log(Math.floor(array.length/2));
console.log(shellSort(array));