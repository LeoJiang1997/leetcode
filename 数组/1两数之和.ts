function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    // /** 打印的是索引 */
    for(let i in nums){
    //     // console.log(i); 打印的是索引 0，1，2，3
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }else {
            map.set(nums[i], i);
        }
    }

    /** 一个数组for of是打印值 */
    // for(let i of nums){
    //     //console.log(i); 打印的是值 2，7，11，15
    // }

    /** 用forof */
    /** 错误，假如值存在相同的情况时，索引就只会索引到第一个一样的值，例如[3,3] 6 第22行打印0而不是1 */
    // let map = new Map();
    // for(let num of nums){
    //     const index = nums.indexOf(num);
    //     if(map.has(target - nums[index]) && index !== map.get(target - num)){
    //         return [map.get(target - num), index];
    //     } else {
    //         map.set(num, index);
    //     }
    // }
};

console.log(twoSum([3,3],6));
