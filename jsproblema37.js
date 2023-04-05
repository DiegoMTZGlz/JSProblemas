const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el número de cursos: ', numCursos => {
  rl.question('Ingrese el número de alumnos por curso: ', numAlumnos => {
    
    const notas = new Array(numCursos);
    for (let i = 0; i < numCursos; i++) {
      notas[i] = new Array(numAlumnos);
    }

    const leerNotas = (curso, alumno) => {
      rl.question(`Ingrese la nota del alumno ${alumno+1} del curso ${curso+1}: `, nota => {
        notas[curso][alumno] = Number(nota);
        if (alumno < numAlumnos-1) {
          leerNotas(curso, alumno+1);
        } else if (curso < numCursos-1) {
          leerNotas(curso+1, 0);
        } else {
          console.log(notas);
          rl.close();
        }
      });
    };

    leerNotas(0, 0);

  });
});
