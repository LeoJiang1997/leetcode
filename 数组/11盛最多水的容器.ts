function maxArea(height: number[]): number {
    //原生写法
    // if (height == null) {
    //     return 0;
    //   }
    //   // 左边界
    //   let left = 0,
    //     // 右边界
    //     right = height.length - 1;
    //   let result = 0;
    //   while (left < right) {
    //     // 左右边界当中的最小值
    //     let minVal = Math.min(height[left], height[right]);
    //     // 结果取决于最小值和宽度
    //     result = Math.max(
    //       result,
    //       // [left, right] 之间的矩形面积
    //       minVal * (right - left)
    //     );
    //     if (height[left] <= height[right]) {
    //       // 如果左边界小则移动左边界向中间靠拢，双指针技巧，移动较低的一边
    //       left++;
    //     } else {
    //       right--;
    //     }
    //   }
    //   return result;

    // 简化后的写法
    let left = 0 ,right = height.length - 1;
    let max = 0; //用来代表上一个面积大小
    while(left < right){
           //left，right较小的那个先向内移动 如果高的指针先移动，那肯定不如当前的面积大
         const minHeight = height[left] < height[right] ? height[left++] : height[right--];
         const area = (right - left + 1) * minHeight;//计算面积
         max = Math.max(max, area);//更新最大面积
    };
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));