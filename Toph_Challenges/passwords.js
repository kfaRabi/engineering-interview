const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const len = input.length;

  let lowerCaseCnt = 0,
	  upperCaseCnt = 0,
  	  numberCnt = 0,
	  passwordCnt = 0;

  for(let i = 0; i < len; i++){
	  if(input[i] <= 'z' && input[i] >= 'a'){
		  lowerCaseCnt++;
	  }
	  else if(input[i] <= 'Z' && input[i] >= 'A'){
		  upperCaseCnt++;
	  }
	  else{
		  numberCnt++;
	  }

	  if(lowerCaseCnt && upperCaseCnt && numberCnt){
		  lowerCaseCnt = upperCaseCnt = numberCnt = 0;
		  passwordCnt++;
	  }
  }

  console.log(passwordCnt);

});
