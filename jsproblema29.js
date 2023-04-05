function tirarDados() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  let c = 0;
  for (let i = 0; i < 100; i++) {
    const dado1 = tirarDados();
    const dado2 = tirarDados();
    if (dado1 + dado2 === 10) {
      c++;
    }
  }
  
  console.log(`Se obtuvo 10 en la suma de los dados ${c} veces.`);