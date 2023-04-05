const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function SHELLSORT(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    let temp = matriz[i][0];
    let j = i - 1;
    while (j >= 0 && matriz[j][0] > temp) {
      matriz[j + 1] = matriz[j];
      j--;
    }
    matriz[j + 1][0] = temp;
  }
  return matriz;
}

rl.question('Ingrese el número de filas: ', filas => {
  rl.question('Ingrese el número de columnas: ', columnas => {

    let matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
      matriz[i] = new Array(columnas);
      for (let j = 0; j < columnas; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100); // Generamos números aleatorios entre 0 y 99
      }
    }

    console.log('Matriz original:');
    console.log(matriz);

    for (let i = 0; i < filas; i++) {
      matriz[i] = SHELLSORT(matriz[i]);
    }

    console.log('Matriz ordenada por la primera columna:');
    console.log(matriz);

    rl.close();
  });
});