const timer = [3, 5, 9, 10, 25];

for (const char of timer) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, char * 1000);
};
