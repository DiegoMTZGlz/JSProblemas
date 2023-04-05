const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];

rl.question('Ingresa las 10 calificaciones separadas por espacio: ', (input) => {
  calificaciones = input.split(' ');

  rl.question('Ingresa la calificación que quieres buscar: ', (nota) => {
    let encontrado = false;

    for (let i = 0; i < calificaciones.length; i++) {
      if (parseFloat(calificaciones[i]) === parseFloat(nota)) {
        console.log(`La calificación ${nota} fue encontrada en la posición ${i + 1}`);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      console.log(`La calificación ${nota} no fue encontrada`);
    }

    rl.close();
  });
});