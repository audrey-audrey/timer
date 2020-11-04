// PRINT '.', sount NOT working!
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input, writes message then exits
  if (key === '\u0003') {
    // Write thanks for using me!
    console.log('Thanks for using me, ciao!');
    process.exit();
    // if key is b, write dot '.'
  } else if (key === 'b') {
    process.stdout.write('.');
  } else if (key > 0 && key <= 9) {
    setTimeout(() => process.stdout.write('.'), key * 1000)
    console.log('done');
  }
});

