const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf-8');

stdin.on('data', (key) => {

  if(key === 'b'){
    process.stdout.write('\x07');
  }

  if(Number.isInteger(Number(key))) {
    beepTimer(Number(key));
  } else {
    process.stdout.write(key);
  }

  if (key === '\u0003') {
    process.stdout.write('\nThanks for using me, ciao!');
    process.exit();
  }


});

const beepTimer = function(number) {
  process.stdout.write(`\nsetting timer for ${number} seconds...`);
  setTimeout(() => process.stdout.write('\x07'), number * 1000); 
};