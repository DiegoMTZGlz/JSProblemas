const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce una frase: ", function(frase) {
  const anchoPantalla = process.stdout.columns;
  const espaciosIzquierda = Math.floor((anchoPantalla - frase.length) / 2);
  console.log(" ".repeat(espaciosIzquierda) + frase);
  readline.close();
});