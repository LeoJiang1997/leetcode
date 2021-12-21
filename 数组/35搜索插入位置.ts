function searchInsert(nums: number[], target: number): number {
  let left = 0,right = nums.length;
  while(left < right){
      const middle = left + Math.floor((right - left)/2);
      var mid = Math.floor((right - left)/2);
      if(nums[middle] > target){
          right = middle; //目标值在左边，往左边查找
      }else if(nums[middle] > target){
          left = middle; //目标值在右边，往右边查找
      } else {
          console.log(mid,middle);
          return middle;
      }
  }
  console.log(mid);
  return right;
};

console.log(searchInsert([1,3,5,6],7));
