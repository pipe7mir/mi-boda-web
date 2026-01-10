// Fecha de la boda
const fechaBoda = new Date("March 6, 2026 15:30:00").getTime();

// Actualizar cada 1 segundo
const x = setInterval(function() {

  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  // Cálculos de tiempo
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Mostrar resultados en los elementos del HTML
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  // Si la cuenta termina
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("cuenta-regresiva").innerHTML = "¡ES HOY!";
  }
}, 1000);