import confetti from 'canvas-confetti';

// Seleccionamos todos los días
const dias = document.querySelectorAll('.div-calendario .dia');

// Seleccionamos modal y sus elementos
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalActividades = document.getElementById('modal-actividades');
const cerrarBtn = document.querySelector('.cerrar');

// Datos detallados por día (puedes editar estos)
const detallesDias = {
  "Viernes 13": [
    "Salir de Flores a la noche, para llegar a la madrugada",
    "Compramos sanguchitos de El Greco para el viaje, y chocos de Rapa",
    "Al llegar, dejar el auto y a mimir",
    "El alojamiento cuenta con sábanas!"
  ],
  "Sábado 14": [
    "Almuerzo en Muy Dinette + comprar postre para la noche",
    "Ir al super a hacer la compra general",
    "Pasamos por el depto a dejar todo y después feria vintage + acai + caminata",
    "Cenamos en el depto, posiblemente pastas"
  ],
  "Domingo 15": [
    "Almuerzo en el depto",
    "Pasear al tapir en la plaza",
    "Merienda en Heraldoooo",
    "Bolwing Urqui [IR TEMPRANO]",
    "Salida loca (posiblemente barsito)",
  ],
  "Lunes 16": [
    "Almuerzo en el depto",
    "Pasear al tapir en la plaza",
    "Merienda Manolo de la costa",
    "Paseo por la costanera",
    "Cenamos en depto y armamos valijas :( :( :( "
  ],
  "Martes 17": [
    "Almuerzo rico + acai",
    "Limpieza profunda del depto",
    "Bañar al tapir",
    "Pasar por Little Ofelia y por Crossy para comprar cosas ricas para la vuelta",
    "Suicidarse, no volver"
  ],
};

// Abrir modal al hacer click en un día
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    const titulo = dia.querySelector('h2').textContent.trim();
    console.log(titulo.substring(0, 6));
    modalTitulo.textContent = titulo;

    // Limpiar actividades previas
    modalActividades.innerHTML = "";

    // Mostrar actividades detalladas
    const actividades = detallesDias[titulo] || [];
    actividades.forEach(act => {
      const div = document.createElement('div');
      div.textContent = act;
      div.style.marginBottom = "8px";
      modalActividades.appendChild(div);
    });

    // Mostrar modal
    modal.style.display = "flex";
  });






  
// Función confeti

dia.addEventListener('click', () => {
  const titulo = dia.querySelector('h2').textContent.trim();
  modalTitulo.textContent = titulo;

  modalActividades.innerHTML = "";
  const actividades = detallesDias[titulo] || [];
  actividades.forEach(act => {
    const div = document.createElement('div');
    div.textContent = act;
    div.style.marginBottom = "8px";
    modalActividades.appendChild(div);
  });

  modal.style.display = "flex";

  // Lanzar confeti cada vez que se abre
  lanzarConfeti();
});





// CONFETI

function lanzarConfeti() {
  const duration = 6 * 1000; // Duración total en ms
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

  const colors = ['#ff0a54', '#5647ffff', '#FF1493', '#ffffffff', '#99FF99', '#000000ff', '#ffe066', '#00b4d8', '#f6ff00ff'];

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 10 + Math.floor(Math.random() * 10);

    // Lanzar confeti desde posiciones aleatorias a lo ancho
    confetti(Object.assign({}, defaults, {
      particleCount,
      colors,
      origin: { x: Math.random(), y: Math.random() * 0.9 } // empieza desde arriba hasta 60% del alto
    }));
  }, 250);
}





});

// Cerrar modal al tocar la X
cerrarBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer click afuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});




