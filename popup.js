document.addEventListener('DOMContentLoaded', function() {
    const transcriptToggle = document.querySelector('[data-purpose="transcript-toggle"]');
    const copyButton = document.querySelector('#copyButton');
    
    copyButton.addEventListener('click', function() {
      // Hacer clic en el botón para mostrar el div
      transcriptToggle.click();
      
      // Esperar un tiempo para que el div aparezca
      setTimeout(function() {
        // Obtener el texto del div y copiarlo al portapapeles
        const transcriptDiv = document.querySelector('.transcript--transcript-panel—kfMxM');
        const transcriptText = transcriptDiv.textContent;
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = transcriptText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
      }, 2000);
    });
  });
  