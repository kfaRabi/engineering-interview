const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if(input === "Who loves Byang?"){
	  console.log("Byangette");
  }
  else{
	  console.log("Byang");
  }
});
