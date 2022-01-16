// function plusOne(digits: number[]): number[] {
//   let carry = false;
//   // 判断最后一位是否需要进位
//   // digits[digits.length-1] ++;
//   for (let i = digits.length - 1; i >= 0; i--){
//     //放在里面就是给最后一位加length-1次，显然错误
//     digits[digits.length-1] ++;
//       if(carry) digits[i]++;
//       carry = digits[i] > 9;
//       digits[i] %= 10;
//   }
//   // 遍历完发现carry为真(说明第一位也是9)，就进位
//   if(carry) digits.unshift(1);
//   return digits;
// };

function plusOne(digits: number[]): number[] {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
      digits[i]++;
        // 解法关键在于取余拿个位，假如是9的话+1为10，取余就正好是0，达到效果
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    // 把新增的数字用0进行映射
    digits = [...Array(len + 1)].map(_=>0);;
    digits[0] = 1;
    return digits;
};
console.log(plusOne([ 9, 9, 9]));