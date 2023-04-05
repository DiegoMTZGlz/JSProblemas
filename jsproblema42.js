const fs = require('fs');

// Abrimos el archivo en modo lectura/escritura
const file = fs.openSync('DATOS.DAT', 'r+');

// Pedimos al usuario el ID del registro a eliminar
const idABorrar = parseInt(prompt('Ingrese el ID del registro a eliminar:'));

// Leemos los datos del archivo y los almacenamos en una matriz
const registros = [];
let buffer = Buffer.alloc(100);
let bytesRead = 0;
let id, nombre, apellidos, direccion, estado;
while (bytesRead = fs.readSync(file, buffer, 0, 100, null)) {
  id = buffer.readInt32LE(0);
  nombre = buffer.toString('utf8', 4, 24).trim();
  apellidos = buffer.toString('utf8', 24, 44).trim();
  direccion = buffer.toString('utf8', 44, 64).trim();
  estado = buffer.toString('utf8', 64, 84).trim();
  registros.push({ id, nombre, apellidos, direccion, estado });
}

// Buscamos el registro a eliminar
let registroABorrar = null;
for (let i = 0; i < registros.length; i++) {
  if (registros[i].id === idABorrar) {
    registroABorrar = registros[i];
    break;
  }
}

// Si encontramos el registro, lo eliminamos
if (registroABorrar) {
  const indice = registros.indexOf(registroABorrar);
  registros.splice(indice, 1);
  console.log(`Registro con ID ${idABorrar} eliminado.`);
} else {
  console.log(`No se encontró ningún registro con ID ${idABorrar}.`);
}

// Escribimos los registros restantes en el archivo
fs.truncateSync(file, 0); // Vaciamos el archivo
for (let i = 0; i < registros.length; i++) {
  buffer.writeInt32LE(registros[i].id, 0);
  buffer.write(registros[i].nombre.padEnd(20), 4, 20, 'utf8');
  buffer.write(registros[i].apellidos.padEnd(20), 24, 20, 'utf8');
  buffer.write(registros[i].direccion.padEnd(20), 44, 20, 'utf8');
  buffer.write(registros[i].estado.padEnd(20), 64, 20, 'utf8');
  fs.writeSync(file, buffer, 0, 100, null);
}

// Cerramos el archivo
fs.closeSync(file);