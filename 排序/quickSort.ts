import { swap } from '../utils/arrRandom';

function quickSort(arr: number[]): number[]{
		if (arr == null || arr.length < 2) {
			return;
		}
		process(arr, 0, arr.length - 1);
}

function process(arr: number[],L: number,R: number) {
		if (L >= R) {
			return;
    }
   //产生一个随机数基数
		swap(arr, L + (Math.random() * (R - L + 1)), R);
		let equalArea = netherlandsFlag(arr, L, R);
		process(arr, L, equalArea[0] - 1);
		process(arr, equalArea[1] + 1, R);
}

	// arr[L...R] 玩荷兰国旗问题的划分，以arr[R]做划分值
	// <arr[R] ==arr[R] > arr[R]
function netherlandsFlag(arr: number[],L: number,R: number): number[]{
		if (L > R) { // L...R L>R
			return;
		}
		if (L == R) {
			return arr;
		}
		let less = L - 1; // < 区 右边界
		let more = R; // > 区 左边界
		let index = L;
		while (index < more) { // 当前位置，不能和 >区的左边界撞上
			if (arr[index] == arr[R]) {
				index++;
			} else if (arr[index] < arr[R]) {
//				swap(arr, less + 1, index);
//				less++;
//				index++;						
				swap(arr, index++, ++less);
			} else { // >
				swap(arr, index, --more);
			}
		}
		swap(arr, more, R); // <[R]   =[R]   >[R]
		return new int[] { less + 1, more };
	}