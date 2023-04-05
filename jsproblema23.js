let c = 0;
let fs = 0;

while (c <= 100) {
  let f = "";
  for (let i = 1; i <= 10 && c <= 100; i++) {
    f += `${c}\t`;
    c++;
  }
  console.log(f);
  fs++;
}