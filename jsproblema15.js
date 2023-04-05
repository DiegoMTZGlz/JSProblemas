const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce el primer número: ", function(num1) {
  readline.question("Introduce el segundo número: ", function(num2) {
    let c = 0;
    let suma = 0;
    let numMenor = Math.min(num1, num2);
    let numMayor = Math.max(num1, num2);
    
    for (let i = numMenor; i <= numMayor; i++) {
      if (i % 2 === 0) {
        c++;
      } else {
        suma += i;
      }
    }
    
    console.log(`Entre ${numMenor} y ${numMayor}, hay ${numMayor - numMenor + 1} números, de los cuales ${c} son pares y la suma de los impares es ${suma}`);
    
    readline.close();
  });
});