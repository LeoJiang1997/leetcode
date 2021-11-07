// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
function twoSum(nums, target) {
  let numMap = new Map();
  let len = nums.length;
  for(let i = 0; i < len; i++){
    if(numMap.has(target-nums[i])) {
        return [numMap.get(target-nums[i]),i];
    } else {
        numMap.set(nums[i],i);
    }   
  }
  return [];
};

console.log(twoSum([2,7,11,15],18));