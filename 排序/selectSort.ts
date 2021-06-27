const arr = [9, 1, 4, 7, 2, 0, 8];
function selectSort(array: number[]): number[] {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minPro = i;
    for (let j = i + 1; j < length; j++) {
      minPro = array[minPro] < array[j] ? minPro : j;
    }
    let temp = array[minPro];
    array[minPro] = arr[i];
    array[i] = temp;
  }
  return array;
}
console.log(selectSort(arr));