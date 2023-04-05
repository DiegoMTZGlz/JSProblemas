const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];
let suma = 0;

rl.question('Ingresa las 10 calificaciones separadas por espacio: ', (input) => {
  calificaciones = input.split(' ');

  for (let i = 0; i < calificaciones.length; i++) {
    suma += parseFloat(calificaciones[i]);
  }

  const media = suma / calificaciones.length;
  console.log(`La media es: ${media}`);
  rl.close();
});