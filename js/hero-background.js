const backgrounds = document.querySelectorAll('.hero-background');
let currentIndex = 0;

function showNextBackground() {
  const currentBackground = backgrounds[currentIndex];
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  const nextBackground = backgrounds[nextIndex];

  // Ocultar la imagen actual
  currentBackground.classList.remove('active');
  currentBackground.classList.add('hidden');

  // Esperar a que la imagen actual desaparezca antes de mostrar la siguiente
  setTimeout(() => {
    currentBackground.classList.remove('hidden'); // Reinicia la clase por si se vuelve a usar
    nextBackground.classList.add('active');
    currentIndex = nextIndex;
  }, 1000); // Tiempo igual a la duración de `transition` en CSS
}

// Cambiar la imagen cada 3 segundos
setInterval(showNextBackground, 5000); // Incluye el tiempo de transición y espera