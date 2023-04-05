const fs = require('fs');

// Definimos los datos del registro a agregar
const nuevoRegistro = {
  id: 1,
  nombre: 'Juan',
  apellidos: 'Pérez',
  direccion: 'Calle 123',
  estado: 'Activo'
};

// Convertimos el objeto a cadena de texto
const registroTexto = JSON.stringify(nuevoRegistro);

// Abrimos el archivo en modo append
fs.appendFile('DATOS.DAT', registroTexto, function (err) {
  if (err) throw err;
  console.log('Registro agregado!');
});