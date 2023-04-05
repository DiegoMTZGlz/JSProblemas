const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function factorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

readline.question("Introduce un número para calcular su factorial: ", function(numero) {
  console.log(`El factorial de ${numero} es ${factorial(numero)}.`);
  readline.close();
});