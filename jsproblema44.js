const fs = require('fs');
const readline = require('readline');

const registros = fs.readFileSync('DATOS.DAT', 'utf-8')
  .split('\n')
  .map(registro => registro.split(','));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el estado a buscar: ', estado => {
  const registrosEncontrados = registros.filter(registro => registro[4] === estado);

  console.log(`Registros encontrados para el estado ${estado}:`);
  registrosEncontrados.forEach(registro => console.log(registro.join(',')));

  rl.close();
});