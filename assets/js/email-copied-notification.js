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


  function copyToClipboardFooter(email) {
    navigator.clipboard.writeText(email).then(() => {
        const notificatioFooter = document.getElementById('email-copied-notification-footer');
        
        // Mostrar el span en el centro de la pantalla
        notificatioFooter.style.display = 'block';
        setTimeout(() => {
          notificatioFooter.style.opacity = '1'; // Aparece suavemente
        }, 10);

        // Ocultar el span después de 2 segundos
        setTimeout(() => {
          notificatioFooter.style.opacity = '0'; // Desaparece suavemente
            setTimeout(() => {
              notificatioFooter.style.display = 'none'; // Ocultarlo completamente
            }, 300); // Coincide con la duración de la transición
        }, 2000);
    });
}
