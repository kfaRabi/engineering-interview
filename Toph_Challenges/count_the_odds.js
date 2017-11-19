const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {

	const range = input.split(' ').map( val => val * 1);
	// console.log(range);

	// a = range[0], b = range[1];
	b = Math.max(range[0], range[1]);
	a = Math.min(range[0], range[1]);


	if(a % 2 === 0){
		a++;
	}
	if(b % 2 === 0){
		b--;
	}

	const count = (b - a) / 2;

	console.log( count + 1);

});
