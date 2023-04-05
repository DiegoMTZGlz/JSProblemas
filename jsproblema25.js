const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

readline.question("Introduce un número menor de 5000: ", function(numero) {
  const unidadesRomanas = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  const decenasRomanas = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  const centenasRomanas = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  const millaresRomanos = ["","M","MM","MMM"];

  if (numero < 1 || numero >= 5000) {
    console.log("El número debe ser menor de 5000.");
  } else {
    const millares = Math.floor(numero / 1000);
    const centenas = Math.floor((numero % 1000) / 100);
    const decenas = Math.floor((numero % 100) / 10);
    const unidades = numero % 10;
    const numeroRomano = millaresRomanos[millares] + centenasRomanas[centenas] + decenasRomanas[decenas] + unidadesRomanas[unidades];
    console.log(`El número ${numero} en número romano es ${numeroRomano}.`);
  }
  readline.close();
});