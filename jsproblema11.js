const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce un número: ", function(numero) {
  let contador = 0;
  
  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) {
      console.log(`${i} es múltiplo de 3`);
      contador++;
    }
  }
  
  console.log(`Entre 1 y ${numero}, hay ${contador} múltiplos de 3`);
  
  readline.close();
});