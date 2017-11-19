const arr = [1, 1, 2, '', 4, 6, 'hello', 7, 8, 'toString', 8, 8, 'world'];

function uncount(arr){
	let set = new Set();
	for(let i =0; i < arr.length; i++){
		set.add(arr[i]);
	}
	return set.size;
}

function mcount(arr){
	let map = new Map();
	let maxCount = 0, maxItem, tmp;
	for(let i =0; i < arr.length; i++){
		map.set(arr[i], 0);
	}
	for(let i =0; i < arr.length; i++){
		tmp = map.get(arr[i]) + 1;
		map.set(arr[i], tmp);
		if(tmp > maxCount){
			maxCount = tmp;
			maxItem = arr[i];
		}
	}
	return maxItem;

}

console.log(uncount(arr));
console.log(mcount(arr));
