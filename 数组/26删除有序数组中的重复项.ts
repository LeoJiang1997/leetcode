function removeDuplicates(nums: number[]): number {
    const len = nums.length;
    if (len == 0) return 0;
    let slow = 0, fast = 1;
    while (fast < len) {
    // 双指针查找一样的元素，假如两个指针指的元素不一样
    // 慢指针往前一格,即指到了重复元素中后面的那个
    // 把重复的值用后面不重复的值覆盖掉        
    if (nums[fast] != nums[slow]) {
            // 使慢指针下一个值指向快指针值
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    // slow后面都是重复元素,
    //所以这里返回的数组只需要返回到return的length
    return slow + 1;
};

console.log(removeDuplicates([1,1,2]));
 