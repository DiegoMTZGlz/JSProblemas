let matriz = [];

// Generar la matriz
for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

// Imprimir la matriz
for (let i = 0; i < 4; i++) {
  console.log(matriz[i].join(' '));
}