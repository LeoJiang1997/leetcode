function majorityElement(nums: number[]): number {
    // 最关键的是在理解题意，多数出现的数组只能是存在两个不同数的数组
    // 法一 
    //多数是出现次数超过一半的数，那么数组中最中间的数一定是符合条件的（一个数组中只有两个不同元素）
    // nums.sort((a, b) => a - b);
    // return nums[Math.floor(nums.length / 2)];

    // 法二 key为数字，value为该数字出现次数
    const len = nums.length,
    half = len / 2,
    m = new Map();
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i];
      m.set(item, (m.get(item) || 0) + 1);
      // 过半就是多数，直接返回
      if (m.get(item) > half) return item;
    }
  
 };

console.log(majorityElement([2,2,1,1,1,2,2,2]));
