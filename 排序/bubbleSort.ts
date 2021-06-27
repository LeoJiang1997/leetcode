// function randArray(len, min, max) {
//   return Array.from({length:len}, v => Math.floor(Math.random()*(max-min))+min);
// }

  let arrBubble: number[];
  function bubbleSort(arr: number[]): number[]{
    for (let i = arr.length-1; i > 0; i--){
      for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }
  
  arrBubble = randArray(6,0,9);
  console.log(bubbleSort(arrBubble));
