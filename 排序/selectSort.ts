const arr = [9, 1, 4, 7, 2, 0, 8];
// 选择排序选最小
function selectSort(array: number[]): number[] {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minPro = i;
    // 从未排序数组里寻找那个最小值放进已经排完的数组中
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