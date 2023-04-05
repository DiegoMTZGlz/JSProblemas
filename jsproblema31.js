const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Ingrese un número: ", function(numero) {
  // Comprobar si es primo
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    console.log(`${numero} es primo.`);
  } else {
    console.log(`${numero} no es primo.`);
  }

  // Calcular factorial
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  console.log(`El factorial de ${numero} es ${factorial}.`);

  // Imprimir tabla de multiplicar
  console.log(`Tabla de multiplicar de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  readline.close();
});