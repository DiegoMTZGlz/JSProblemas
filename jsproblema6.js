const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
  
  readline.question("Imprimir números hasta: ", numero => {
    for (let i = 1; i <= numero; i++) {
      console.log(i);
    }
  
    readline.close();
  });