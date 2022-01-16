function threeSumClosest(nums: number[], target: number): number {
  let len = nums.length;
  nums.sort((a,b) => a - b);
  let closestNum = nums[0] + nums[1] + nums[2];
  for(let i = 0; i< len -2 ; i++){
    let left = i+1,right = len - 1;
    while(left < right){
        let threeSum = nums[i] + nums[left] + nums[right];
        if(Math.abs(threeSum - target) < Math.abs(closestNum - target)){
            closestNum = threeSum;
        }
        if(threeSum > target){
            right--;
        }else if(threeSum < target){
            left++;
        }else if(threeSum == target){
            return target;
        }
    }
  }
  return closestNum;
};