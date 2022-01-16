/**
窗口内是什么？
如何移动窗口的起始位置？
如何移动窗口的结束位置？ */
function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0; // 滑动窗口数值之和
  let left = 0; // 滑动窗口的左位置
  let result = Number.MAX_SAFE_INTEGER; // 满足条件时的窗口长度
  for(let right = 0; right < nums.length; right++){
      sum += nums[right];  //将窗口内值相加求和，right 指针向右移动，扩大窗口
      while(sum >= target){
        result = Math.min(result, right - left + 1);
        sum -= nums[left++];
      }
  }
  return result == Number.MAX_SAFE_INTEGER ? 0 : result;
};