const readline = require("readline").createInterface({input: process.stdin, output: process.stdout});

function verificar(numero) {
    if (numero > 0) {
      console.log("El número ${numero} es positivo.");
    } else if (numero < 0) {
      console.log("El número ${numero} es negativo.");
    } else {
      console.log("El número es cero.");
    }
  }
  
  readline.question("Introduce un número: ", numero => {
    if (isNaN(numero)) {
      console.log("Debes introducir un número válido.");
    } else {
      verificar(parseFloat(numero));
    }
    readline.close();
  });