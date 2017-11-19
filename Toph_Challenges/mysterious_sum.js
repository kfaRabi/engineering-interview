const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let caseCnt = 0;

rl.on('line', (input) => {
	if(caseCnt){
		const nums = input.split(' ').map( num => num * 1);
		const firstPart = (nums[0] + nums[1]) + "";
		const secondPart = Math.abs(nums[0] - nums[1]) + "";
		console.log(`Case ${caseCnt}: ${firstPart}${secondPart}`);
	}
	caseCnt++;
});
