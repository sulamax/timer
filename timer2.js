const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const asking = function(question, answer) {
  ask.question(question,
    answer => {
      if (answer === 'b') {
        console.log(answer)
        setTimeout(() => {
          process.stdout.write('\x07');
          process.exit();
        }, 0 * 1000);
      } else {
        console.log(answer)
        setTimeout(() => {
          process.stdout.write('\x07');
          process.exit();
        }, answer * 1000);
      }
    })
}
asking('setting timer for ');

