function search(nums: number[], target: number): number {
    let len = nums.length;
    let left = 0,right = len - 1;
    while(left <= right){
      let mid = (left+right)>>1;
      if(nums[mid] < target){
          left = ++mid;
      } else if(nums[mid] > target){
          right = --mid;
      } else {
          return mid;
      }
    }
    return -1;
  };

  console.log(search([-1,0,3,5,9,12],2));

//TODO 对于寻找左右边界的二分搜索，常见的手法是使用左闭右开的「搜索区间」，我们还根据逻辑将「搜索区间」全都统一成了两端都闭，便于记忆，只要修改两处即可变化出三种写法：

function leftBound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定左侧边界
            right = mid - 1;
        }
    }
    // 最后要检查 left 越界的情况
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left;
}

function rightBound(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }
    // 最后要检查 right 越界的情况
    if (right < 0 || nums[right] != target)
        return -1;
    return right;
}
