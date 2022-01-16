function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    //复杂度为O(m+n)log(m+n),m和n分别为nums1和nums2的长度，复杂度不符合要求，且未使用到数组有序这一条件
    // let newArr = nums1.concat(nums2);
    // newArr = newArr.sort((a,b) => a - b);
    // const mid = newArr.length / 2;
    // if(newArr.length % 2 === 0){
    //     const mid2 = mid -1;
    //     return (newArr[mid] + newArr[mid2]) / 2;
    // }else {
    //     return newArr[Math.floor(mid)];
    // }

  // make sure to do binary search for shorten array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  const m = nums1.length
  const n = nums2.length
  let low = 0
  let high = m
  while(low <= high) {
    const i = low + Math.floor((high - low) / 2)
    const j = Math.floor((m + n + 1) / 2) - i

    const maxLeftA = i === 0 ? -Infinity : nums1[i-1]
    const minRightA = i === m ? Infinity : nums1[i]
    const maxLeftB = j === 0 ? -Infinity : nums2[j-1]
    const minRightB = j === n ? Infinity : nums2[j]

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
    } else if (maxLeftA > minRightB) {
      high = i - 1
    } else {
      low = low + 1
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]));