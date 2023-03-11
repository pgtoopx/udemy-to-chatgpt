const transcriptToggle = document.querySelector('[data-purpose="transcript-toggle"]');
const copyButton = document.querySelector('#copyButton');
const inputElement = document.querySelector('#input-text');

copyButton.addEventListener('click', function() {
  // Hacer clic en el botón para mostrar el div
  transcriptToggle.click();
  
  // Esperar un tiempo para que el div aparezca
  setTimeout(function() {
    // Obtener el texto del div y establecerlo en la entrada de texto
    const transcriptDiv = document.querySelector('.transcript--transcript-panel—kfMxM');
    const transcriptText = transcriptDiv.textContent;
    inputElement.value = transcriptText;
    inputElement.focus();
    
    // Solicitar al usuario que confirme el texto a enviar
    const promptResult = window.prompt('Texto a enviar:', transcriptText);
    if (promptResult !== null) {
      inputElement.value = promptResult;
    }
  }, 2000);
});
