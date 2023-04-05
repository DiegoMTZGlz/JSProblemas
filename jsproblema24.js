const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce un número mayor o igual que 1: ", function(numero) {
  if (numero < 1) {
    console.log("El número debe ser mayor o igual que 1.");
  } else if (numero === 1) {
    console.log("El número 1 no es primo.");
  } else if (numero === 2) {
    console.log("El número 2 es primo.");
  } else {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      console.log(`El número ${numero} es primo.`);
    } else {
      console.log(`El número ${numero} no es primo.`);
    }
  }
  readline.close();
});