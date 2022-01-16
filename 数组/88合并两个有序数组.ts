function merge(nums1, m, nums2, n) {
    // 法一：先拼接再排序
    // nums1.splice(m, nums1.length - m, ...nums2);
    // nums1.sort((a, b) => a - b);
    // 法二：逆序遍历双指针进行比较大小，边比边排序
    // 实际是三指针，指针1指向nums1中不是0的最后的数，指针2指向nums2的末尾，而指针三index则用来确定插入位置
    let index = nums1.length;
    // 结束条件为遍历完所有的m和n
    while (n > 0) {
        while (m > 0 && nums1[m - 1] > nums2[n - 1]) {
            // 指针1的数大于指针2的数，所以此时指针2的数字不需要插入
            // 指针1的值赋给指针3，因为指针3的值都是0，指针1往前寻找给nums2中的数可以插入的位置
            nums1[--index] = nums1[--m];
        }
        // 假如指针1指向的数小于指针2的数,则把指针2的丢去指针3的位置
        nums1[--index] = nums2[--n];
    }
}
;
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
