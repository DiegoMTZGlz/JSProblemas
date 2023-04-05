let c = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    c++;
  }
}

console.log("Hay " + c + " números impares hasta el 100.");