const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

let contador = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    contador++;
  }
}

console.log(`Entre 1 y 100, hay ${contador} números múltiplos de 2 o de 3`);

readline.close();