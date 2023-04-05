const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let numero1, numero2;
  
  readline.question("Introduce el primer número: ", function (num1) {
    numero1 = parseFloat(num1);
    readline.question("Introduce el segundo número: ", function (num2) {
      numero2 = parseFloat(num2);
      console.log(`Los números introducidos son: ${numero1} y ${numero2}`);
      mostrarMenu();
    });
  });
  
  function mostrarMenu() {
    console.log("Elige una operación: ");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    readline.question("Selecciona una opción: ", function (opcion) {
      switch (opcion) {
        case "1":
          console.log(`La suma es: ${numero1 + numero2}`);
          break;
        case "2":
          console.log(`La resta es: ${numero1 - numero2}`);
          break;
        case "3":
          console.log(`La multiplicación es: ${numero1 * numero2}`);
          break;
        case "4":
          if (numero2 === 0) {
            console.log("No se puede dividir entre cero.");
          } else {
            console.log(`La división es: ${numero1 / numero2}`);
          }
          break;
        default:
          console.log("Opción inválida.");
          break;
      }
      readline.close();
    });
  }  