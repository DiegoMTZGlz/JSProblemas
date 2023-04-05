let matriz = [];

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}
console.log('Matriz:');
for (let i = 0; i < 4; i++) {
  console.log(matriz[i].join(' '));
}

// Matriz transpuesta
let transpuesta = [];
for (let i = 0; i < 5; i++) {
  transpuesta[i] = [];
  for (let j = 0; j < 4; j++) {
    transpuesta[i][j] = matriz[j][i];
  }
}

// Matriz transpuesta
console.log('Matriz transpuesta:');
for (let i = 0; i < 5; i++) {
  console.log(transpuesta[i].join(' '));
}