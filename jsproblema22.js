const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce una frase: ", function(frase) {
  for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(4 * i) + frase);
  }
  readline.close();
});