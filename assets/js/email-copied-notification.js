function copyToClipboard(email) {
    navigator.clipboard.writeText(email).then(() => {
      const notification = document.getElementById('email-copied-notification');
      // Muestra la burbuja
      notification.style.display = 'inline-block';
      notification.style.opacity = '1';


      // Oculta la burbuja después de 2 segundos
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 300);
      }, 2000);
    });
  }