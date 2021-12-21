// 需考虑[0,1,2,2,3,0,4,2]，2相邻两个重复值的情况，这种情况删了一个数后
// index依然在往前走，没有判断到后面的重复值
// 原因: splice会改变原数组,会把2位置的2删掉，然后把后面所有的数往前挪一位
function removeElement(nums: number[], val: number): number {
    /** 法一 */
    // if(nums.length === 0){return 0;}
    // const l = nums.length;
    // for (let i = 0; i < l; i++) {
    //     // 1.1）若 当前下标的指向的值 为 val，则 删除（使用JS数组自带的 splice 方法）该数 。
    //     // 注意：此时需要将 i 进行 减1 操作，主要为了解决原因
    //     if (val === nums[i]) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    // return nums.length;

    /** 法二 */
    //双指针
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;

    /** 法三 */
    /** 覆盖法 */
    // 太牛了，for of遍历数组，假如不是等于val的值就用该值把前面的值覆盖掉
    // 其实也相当于双指针，法二的优化，ans为慢指针，forof为快指针
    // let ans = 0;
    // for(const num of nums) {
    //     if(num != val) {
    //         nums[ans] = num;
    //         ans++;
    //     }
    // }
    // return ans;
  };

console.log(removeElement([3,2,2,3],3));
