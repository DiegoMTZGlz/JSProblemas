const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
  
  let sumPares = 0;
  let sumImpares = 0;
  
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 2 === 0) {
      sumPares += i;
    } else {
      sumImpares += i;
    }
  }
  
  console.log("La suma de los números pares es: ${sumPares}");
  console.log("La suma de los números impares es: ${sumImpares}");
  
  readline.close();