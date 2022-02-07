//利用快排思想
function moveZeroes(nums: number[]): void {
  if (nums.length == 1) {
    return;
  }
  let j = 0;
  for (let i = 0; i < nums.length; i++){
    //不是0 i和j一起后移 同时交换i和j
    //如果nums[i]=0 此时j指向的就是0
    if (nums[i] != 0) {
      if(nums[j]==0){
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
      }
      j++;
    }
  }
}

//双指针
function moveZeroes2(nums: number[]): void {
  if (nums.length == 1) {
    return;
  }
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != 0) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }
  // 将slowIndex之后的冗余元素赋值为0
  for (let i = slowIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}