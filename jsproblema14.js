const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let numeros = [];

function obtenerNumero(i) {
  readline.question("Introduce el número " + (i + 1) + ": ", function(numero) {
    if (isNaN(numero)) {
      console.log("Error: no ingresaste un número");
      obtenerNumero(i);
    } else {
      numeros.push(parseFloat(numero));
      if (numeros.length === 5) {
        let mayor = numeros[0];
        let menor = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
          if (numeros[i] > mayor) {
            mayor = numeros[i];
          }
          if (numeros[i] < menor) {
            menor = numeros[i];
          }
        }
        console.log(`El mayor número es ${mayor} y el menor número es ${menor}`);
        readline.close();
      } else {
        obtenerNumero(i + 1);
      }
    }
  });
}

obtenerNumero(0);