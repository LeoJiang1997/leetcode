function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length == 0) return []//若数组为空，直接返回答案
  const res = []
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1//赋值上下左右边界
  while (top <= bottom && left <= right) {//向右移动直到最右
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    top++; //重新设定上边界
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--; //重新设定右边界
    if (top > bottom || left > right) break
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--; //重新设定下边界
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++;  //重新设定左边界
  }
  return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));