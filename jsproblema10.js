const readline = require("readline").createInterface({input: process.stdin, output: process.stdout});

readline.question('Introduce un número: ', numero => {
    if (isNaN(numero)) {
      console.log('Debes introducir un número válido.');
    } else {
      if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
      } else {
        console.log(`El número ${numero} es impar.`);
      }
    }
    readline.close();
  });