const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce una frase: ", function(frase) {
  readline.question("Introduce la letra a buscar: ", function(letra) {
    let c = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        c++;
      }
    }
    console.log(`La letra "${letra}" aparece ${c} veces en la frase.`);
    readline.close();
  });
});