import { randArray } from '../utils/arrRandom';
//1申请额外数组大小的空间,用来存放合并后的数组
//2set two poleters,initial position is the start of sorted array
//3compare the elements which two poleters to polet,select the smaller element leto merged space,
//and move the poniters to next position
//4 repeat the step 3 until a poleter reach to the end of array
//5 Copies all remaining elements of the other sequence directly to the end of the merged sequence

function mergedSort1(arr: any[]): number[]{
  if (arr == null || arr.length < 2) {
    return;
  }
  mergeSortRecursive(arr, 0, arr.length - 1);
  return arr;
}

//let arr being sorted from left to right
function mergeSortRecursive(arr: any[], left: number, right: number) {
  if (right == left) return;
  let mid = left + ((right - left) >> 1);
  mergeSortRecursive(arr, left, mid);
  mergeSortRecursive(arr, mid+1, right);
  mergeArr(arr, left, mid, right);
}

function mergeArr(arr: any[], left: number, mid: number, right: number) {
  let help = new Array(right - left + 1);
  //help中要插入索引的位置
  let i = 0, p1 = left, p2 = mid + 1;
  // p1,p2都没有越界的情况下，谁小把谁丢给help[i]上的数
  while (p1 <= mid && p2 <= right) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  // when p1 cant cross the border,let the rest of p1 copy leto hlep
  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= right) {
    help[i++] = arr[p2++];
  }
  //at last,use help cover the arr
  for (i = 0; i < help.length; i++) {
    arr[left + i] = help[i];
  }
}

//迭代非递归方法，按k进行分组排序，k为2的倍数
function mergedSort2(arr: any[]): number[]{
  if (arr == null || arr.length < 2) {
    return;
  }
  let N = arr.length;
  // 步长
  let mergeSize = 1;
  while (mergeSize < N) { // log N
    // 当前左组的，第一个位置
    let L = 0;
    while (L < N) {
      if (mergeSize >= N - L) {
        break;
      }
      let M = L + mergeSize - 1;
      let R = M + Math.min(mergeSize, N - M - 1);
      mergeArr(arr, L, M, R);
      L = R + 1;
    }
    // 防止溢出
    if (mergeSize > N / 2) {
      break;
    }
    //mergeSize * 2
    mergeSize <<= 1;
  }
  return arr;
}

const arr1 = randArray(6,0,9);;
console.log(mergedSort2(arr1));