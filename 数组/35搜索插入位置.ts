function searchInsert(nums: number[], target: number): number {
  let left = 0,right = nums.length;
  while(left < right){
      //为了防止数字溢出，因为left和right肯定不超过整数最大值，但left+right就不一定了
      const middle = left + Math.floor((right - left)/2);
      if(nums[middle] > target){
          right = middle; //目标值在左边，往左边查找
      }else if(nums[middle] > target){
          left = middle+1; //目标值在右边，往右边查找
      } else if(nums[middle] === target){
          return middle;
      }
  }
  // 如果没找到就返回插入下标
  return right;
};

console.log(searchInsert([1,3,5,6],7));
