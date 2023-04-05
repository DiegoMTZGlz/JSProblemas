const paginas = 3;
const filas = 4;
const columnas = 5;
let valor = 1;

for (let p = 1; p <= paginas; p++) {
  console.log(`Página ${p}:`);
  for (let f = 1; f <= filas; f++) {
    let fila = '';
    for (let c = 1; c <= columnas; c++) {
      fila += `${valor}\t`;
      valor++;
    }
    console.log(fila);
  }
  console.log('');
}