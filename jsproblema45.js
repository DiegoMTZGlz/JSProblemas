const fs = require('fs');
const readline = require('readline');

// Creamos el objeto para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Abrimos el archivo DATOS.DAT en modo lectura binaria
const fd = fs.openSync('DATOS.DAT', 'r');

// Definimos la estructura del registro
const registroSize = 76; // 4 (ID) + 20 (nombre) + 30 (apellidos) + 20 (dirección) + 2 (estado)
const registroStruct = {
  id: { offset: 0, length: 4 },
  nombre: { offset: 4, length: 20 },
  apellidos: { offset: 24, length: 30 },
  direccion: { offset: 54, length: 20 },
  estado: { offset: 74, length: 2 }
};

// Función para buscar un registro por su ID utilizando una búsqueda binaria
function buscarRegistroPorId(fd, id) {
  const fileSize = fs.statSync('DATOS.DAT').size;
  let low = 0;
  let high = Math.floor(fileSize / registroSize) - 1;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const buffer = Buffer.alloc(registroSize);
    const bytesRead = fs.readSync(fd, buffer, 0, registroSize, mid * registroSize);
    
    if (bytesRead === 0) {
      break;
    }
    
    const registro = {};
    Object.keys(registroStruct).forEach(field => {
      const { offset, length } = registroStruct[field];
      registro[field] = buffer.toString('utf8', offset, offset + length).trim();
    });
    
    if (registro.id === id) {
      return registro;
    } else if (registro.id < id) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return null;
}

// Solicitamos al usuario que ingrese el ID del registro a consultar
rl.question('Ingrese el ID del registro a consultar: ', id => {
  const registro = buscarRegistroPorId(fd, id);
  if (registro) {
    console.log('Registro encontrado:');
    console.log(registro);
  } else {
    console.log('No se encontró el registro.');
  }
  
  // Cerramos el archivo y la entrada estándar
  fs.closeSync(fd);
  rl.close();
});