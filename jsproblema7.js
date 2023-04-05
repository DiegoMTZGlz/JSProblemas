const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

  let c = 0;
  
  function pedirFrase() {
    readline.question('> ', res => {
      const frase = res.trim();
      if (frase !== '') {
        c++;
        pedirFrase();
      } else {
        readline.close();
        console.log("Has introducido ${c} frases.");
      }
    });
  }
  
  console.log("Introduce frases y para finalizar presiona la tecla enter.");
  pedirFrase();
  