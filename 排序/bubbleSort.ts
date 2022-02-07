// function randArray(len, min, max) {
//   return Array.from({length:len}, v => Math.floor(Math.random()*(max-min))+min);

import { randArray } from '../utils/arrRandom';

// }
  let arrBubble: number[];
  // 冒泡排序，谁大谁交换（冒泡）
  function bubbleSort(arr: number[]): number[]{
    let len = arr.length;
    // for(let i = len - 1;i > 0;i--){
    //   for(let j = 0;j < i; j++){
    //     if(arr[j] > arr[j+1]){
    //       let temp = arr[j];
    //       arr[j] = arr[j+1];
    //       arr[j+1] = temp;
    //     }
    //   }
    // }
    // 冒小泡
    for(let i = 0;i < len;i++){
      for(let j = len -1;j > i; j--){
        if(arr[j] < arr[j-1]){
          let temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
        }
      }
    }
    return arr;
  }
  
  arrBubble = randArray(6,0,9);
  console.log(bubbleSort(arrBubble));
