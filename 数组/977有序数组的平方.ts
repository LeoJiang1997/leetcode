function sortedSquares(nums: number[]): number[] {
    // 解法一: api选手参见nlogn
    // return nums.map( t => t * t ).sort( (a, b) => a - b );
    // 解法二：双指针，因为最大数总是在头部，从两边到里面按理来说就是从大到小排序
    const res = [];
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);
        if (leftNum > rightNum) {
            res.unshift(leftNum * leftNum);
            left++;
        } else {
            res.unshift(rightNum * rightNum);
            right--;
        }
    }
    return res;
}

console.log(sortedSquares([-7,-3,2,3,11]));
