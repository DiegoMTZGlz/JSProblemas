const fs = require('fs');
const readline = require('readline');

// Leemos el archivo DATOS.DAT
const datos = fs.readFileSync('DATOS.DAT', 'utf-8').split('\n');

// Creamos un objeto para almacenar los registros del archivo
const registros = [];
for (let i = 0; i < datos.length; i++) {
  const campos = datos[i].split(',');
  registros.push({
    id: parseInt(campos[0]),
    nombre: campos[1],
    apellidos: campos[2],
    direccion: campos[3],
    estado: campos[4]
  });
}

// Mostramos al usuario el contenido del archivo
console.log('Registros en DATOS.DAT:');
for (let i = 0; i < registros.length; i++) {
  console.log(`${i+1}. ${registros[i].id} ${registros[i].nombre} ${registros[i].apellidos} ${registros[i].direccion} ${registros[i].estado}`);
}

// Pedimos al usuario que seleccione el registro que desea modificar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Seleccione el número del registro que desea modificar: ', (numeroRegistro) => {
  const indiceRegistro = parseInt(numeroRegistro) - 1;

  // Verificamos que el número ingresado sea válido
  if (isNaN(indiceRegistro) || indiceRegistro < 0 || indiceRegistro >= registros.length) {
    console.log('Número de registro inválido.');
    rl.close();
    return;
  }

  // Pedimos al usuario que ingrese los nuevos valores para los campos que desea modificar
  rl.question('Ingrese el nuevo ID: ', (nuevoId) => {
    rl.question('Ingrese el nuevo nombre: ', (nuevoNombre) => {
      rl.question('Ingrese los nuevos apellidos: ', (nuevosApellidos) => {
        rl.question('Ingrese la nueva dirección: ', (nuevaDireccion) => {
          rl.question('Ingrese el nuevo estado: ', (nuevoEstado) => {

            // Actualizamos los valores correspondientes en la variable que contiene el contenido del archivo
            registros[indiceRegistro].id = parseInt(nuevoId);
            registros[indiceRegistro].nombre = nuevoNombre;
            registros[indiceRegistro].apellidos = nuevosApellidos;
            registros[indiceRegistro].direccion = nuevaDireccion;
            registros[indiceRegistro].estado = nuevoEstado;

            // Creamos una cadena con los nuevos valores y la reemplazamos en el archivo
            let nuevoContenido = '';
            for (let i = 0; i < registros.length; i++) {
              nuevoContenido += `${registros[i].id},${registros[i].nombre},${registros[i].apellidos},${registros[i].direccion},${registros[i].estado}\n`;
            }
            fs.writeFileSync('DATOS.DAT', nuevoContenido);

            console.log('Registro actualizado con éxito.');
            rl.close();

          });
        });
      });
    });
  });
});