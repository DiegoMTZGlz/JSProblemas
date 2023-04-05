// Creamos la matriz de ventas
const ventas = [
    [[10, 20, 30, 40], [50, 60, 70, 80], [90, 100, 110, 120], [130, 140, 150, 160]],
    [[170, 180, 190, 200], [210, 220, 230, 240], [250, 260, 270, 280], [290, 300, 310, 320]],
    [[330, 340, 350, 360], [370, 380, 390, 400], [410, 420, 430, 440], [450, 460, 470, 480]]
  ];
  
  // Creamos la matriz de total de ventas
  const totalVentas = new Array(12);
  for (let i = 0; i < 12; i++) {
    totalVentas[i] = new Array(4);
  }
  
  // Recorremos cada mes y producto
  for (let mes = 0; mes < 12; mes++) {
    for (let producto = 0; producto < 4; producto++) {
      // Sumamos las ventas de cada representante
      let totalMesProducto = 0;
      for (let rep = 0; rep < 3; rep++) {
        // Verificamos si el elemento del arreglo es un arreglo válido
        if (Array.isArray(ventas[rep][mes])) {
          totalMesProducto += ventas[rep][mes][producto];
        }
      }
      // Agregamos el total a la matriz de total de ventas
      totalVentas[mes][producto] = totalMesProducto;
    }
  }
  
  // Imprimimos la información
  console.log('Matriz de ventas:');
  console.log(ventas);
  console.log('Matriz de total de ventas:');
  console.log(totalVentas);  