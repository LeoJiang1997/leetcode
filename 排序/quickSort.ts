import { swap } from '../utils/arrRandom';
//左程云视频
function quickSort(arr: number[]): number[]{
  if (arr == null || arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
  return arr;
}

function process(arr: number[],L: number,R: number) {
		if (L >= R) {
			return;
    }
    //产生一个随机数基数，将时间复杂度降为logn的关键
		swap(arr, L + Math.floor((Math.random() * (R - L + 1))), R);
		let equalArea = partition(arr, L, R);
		process(arr, L, equalArea[0] - 1); //递归排序划分好的中轴左侧
		process(arr, equalArea[1] + 1, R); //递归排序划分好的中轴右侧
}

	// arr[L...R] 以arr[R]做划分值
	// <arr[R] ==arr[R] > arr[R]
function partition(arr: number[],L: number,R: number): number[]{
		if (L > R) { // L...R L>R，假如越界说明已经不是一个数组，直接返回
			return;
		}
		if (L == R) { //假如相等说明只有一个数，直接返回该值
			return arr;
		}
		let less = L - 1; // < 区 右边界
		let more = R; // > 区 左边界
		let index = L;
		while (index < more) { // 当前位置，不能和 >区的左边界撞上
			if (arr[index] == arr[R]) {
				index++;
			} else if (arr[index] < arr[R]) {	//＜区则索引+1，＜区往右挪一格		
				swap(arr, index++, ++less);
			} else { // >区则索引不动，大于区往左挪一格
				swap(arr, index, --more);
			}
		}
		swap(arr, more, R); // <[R]   =[R]   >[R]
		return [ less + 1, more ];
}

const arr = [5, 2, 1, 9, 2, 3, 6, 8];
console.log(quickSort(arr));
