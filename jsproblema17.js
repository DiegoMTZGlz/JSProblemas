const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce el primer número: ", function(numero1) {
  readline.question("Introduce el segundo número (debe ser mayor o igual que el primero): ", function(numero2) {
    if (isNaN(numero1) || isNaN(numero2) || numero2 < numero1) {
      console.log("Debes introducir dos números válidos y el segundo debe ser mayor o igual que el primero.");
      readline.close();
      return;
    }
    
    let c = 0;
    let suma = 0;
    
    for (let i = numero1; i <= numero2; i++) {
      if (i % 2 === 0) {
        c++;
        suma += i;
        console.log(`${i} es múltiplo de 2`);
      }
    }
    
    console.log(`Entre ${numero1} y ${numero2}, hay ${c} múltiplos de 2 y su suma es ${suma}.`);
    
    readline.close();
  });
});