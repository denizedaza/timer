// process.stdout.write('\x07'); // beep noise

const inputArgs = process.argv.slice(2);

const alarmBeep = function(numbers) {
  for (const num of numbers) {
    if (num > 0 && !isNaN(num)) { 
      setTimeout(() => process.stdout.write('\x07'), num * 1000);
    }
  }
}

alarmBeep(inputArgs);

//edge cases:

// no numbers provided: should not beep at all
// -> appears to work by default 

// input number is negative: should skip

//input is not a number: should skip 