function randArray(len, min, max) {
  return Array.from({length:len}, v => Math.floor(Math.random()*(max-min))+min);
}

function swap(arr:number[],i:number,j:number){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class insertSort {
  arr: number[];
  inserSortFun(arr: number[]): number[]{
    //右边那侧索引起始位置，就是要排序的那张牌的初始位置
    for(let i=1;i< arr.length;i++){
    //   //把左边已经排序完的作为一列进行遍历，
    //   //假如遇见比那张牌arr[i](arr[j])小的就直接插进去，没有就--遍历
      for(let j=i;j> 0;j--){
        if(arr[j] < arr[j-1]){
          swap(arr,j,j-1);
        }
      }
    }
    return arr;
  }
}

let insertsort = new insertSort;
insertsort.arr = randArray(6,0,9);
console.log(insertsort.inserSortFun(insertsort.arr));
