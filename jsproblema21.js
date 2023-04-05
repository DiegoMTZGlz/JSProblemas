let si = 0;
let sp = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    si += i;
  } else {
    sp += i;
  }
}

console.log(`La suma de los números pares entre 1 y 1000 es ${si}.`);
console.log(`La suma de los números impares entre 1 y 1000 es ${sp}.`);