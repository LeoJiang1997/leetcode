//? from浅拷贝一个数组，浅拷贝会改变原数组，因为复制的是地址，深拷贝复制的是值
// console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
export class RandomNum{
  randArray(len, min, max) {
    return Array.from({length:len}, v => Math.floor(Math.random()*(max-min))+min);
  }
  
  // ES6为Array增加了fill()函数，使用制定的元素填充数组，其实就是用默认内容初始化数组。
  //该函数有三个参数。arr.fill(value, start, end)
  //!value：填充值。start：填充起始位置，可以省略。end：填充结束位置，可以省略，实际结束位置是end-1。
  //用1先填满原数组，再创建新数组，循环遍历原数组把随机数放进去返回这个新的数组
  randArray2(len, min, max) {
    return Array(len).fill(1).map(v => Math.floor(Math.random()*(max-min))+min);
  }
  
  //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

  swap(arr:number[],i:number,j:number){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}


