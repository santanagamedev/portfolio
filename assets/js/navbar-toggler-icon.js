// Obtener el botón de navegación y el contenedor del ícono
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');

// Función para cambiar entre el ícono de hamburguesa y "X"
function setIconState(isExpanded) {
  if (isExpanded) {
    // Cambiar a la hamburguesa cuando el menú está colapsado
    navbarTogglerIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
        <path d="M4 7h22"/>
        <path d="M4 15h22"/>
        <path d="M4 23h22"/>
      </svg>
    `;
  } else {
    // Cambiar a la "X" cuando el menú está desplegado
    navbarTogglerIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
        <path d="M4 4l22 22"/>
        <path d="M4 26l22-22"/>
      </svg>
    `;
  }
}

// Establecer el ícono inicial (estado colapsado)
setIconState(true); // Aquí se establece el estado inicial del ícono como hamburguesa

// Función que maneja el cambio entre los íconos de hamburguesa y "X"
navbarToggler.addEventListener('click', function () {
  const expanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  
  // Cambiar el ícono según el estado
  setIconState(!expanded);
});
