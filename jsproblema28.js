function lanzamientoMoneda() {
    const cara = 0;
    const cruz = 1;
    const resultado = Math.floor(Math.random() * 2);
    return resultado === cara ? "Cara" : "Cruz";
  }
  
  console.log(lanzamientoMoneda());