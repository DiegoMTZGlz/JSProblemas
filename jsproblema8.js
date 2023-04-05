const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

function validarEntrada(texto) {
    if (texto == "s" | texto == "S"){
        return (texto);
    } else if (texto == "n" | texto == "N"){
        return (texto);
    }
}
  
  function pedirRespuesta() {
    readline.question('¿Quieres continuar? (S/N): ', respuesta => {
      if (validarEntrada(respuesta)) {
        console.log(`Has introducido "${respuesta}".`);
        readline.close();
      } else {
        console.log('La entrada no es válida. Introduce S o N.');
        pedirRespuesta();
      }
    });
  }
  
  pedirRespuesta();