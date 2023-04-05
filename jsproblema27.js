const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce un número entre 0 y 10: ", (numero) => {
  if (isNaN(numero) || numero < 0 || numero > 10) {
    console.log("Debe introducir un número entre 0 y 10.");
    rl.close();
  } else {
    for (let i = 0; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    rl.close();
  }
});