function removeDuplicates(nums: number[]): number {
    const sortNum = nums.sort();
    sortNum.forEach((value,index) => {
        const b = index + 1;
        
        if(value === nums[index+1]){
            nums.splice(index,1);
        }
    })
  return sortNum.length;
};

 console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
 