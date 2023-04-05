function reloj() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    console.log(`${horas}:${minutos}:${segundos}`);
  }
  
  setInterval(reloj, 1000);