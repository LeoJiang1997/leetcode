function searchRange(nums: number[], target: number): number[] {

    function leftBound(nums: number[], target: number): number{
       let left = 0, right = nums.length - 1;
       while(left <= right){
         const mid = (left + right)>>1;
         if(nums[mid] < target){
             left = mid + 1;
         } else if(nums[mid] > target){
             right = mid - 1;
         } else {
             right = mid - 1;
         }
       }
        // 最后要检查 left 越界的情况
        if (left >= nums.length || nums[left] != target)
            return -1;
        return left;
    }
    
    function rightBound(nums: number[], target: number): number{
       let left = 0, right = nums.length - 1;
       while(left <= right){
         const mid = (left + right)>>1;
         if(nums[mid] < target){
             left = mid + 1;
         } else if(nums[mid] > target){
             right = mid - 1;
         } else {
             left = mid + 1;
         }
       }
        // 最后要检查 right 越界的情况
        if (right < 0 || nums[right] != target)
            return -1;
        return right;
    }
    
    let left = leftBound(nums,target);
    let right = rightBound(nums,target);
    return [left,right]
    };
