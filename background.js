chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          const transcriptToggle = document.querySelector('[data-purpose="transcript-toggle"]');
          transcriptToggle.click();
          setTimeout(function() {
            const transcriptPanel = document.querySelector('[data-purpose="transcript-panel"]');
            const cues = transcriptPanel.querySelectorAll('[data-purpose="transcript-cue"]');
            let transcripcion = ""
            cues.forEach(cue => {
                transcripcion = transcripcion + cue.textContent;
            });

            const orden = "Resuma lo siguiente en español"
            
            const mensaje = orden+ ". " + "Transcripcion " + transcripcion
  
            console.log(mensaje);

            const input = document.createElement("textarea");
            document.body.appendChild(input);
            input.value = mensaje;
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);


          }, 1000);
        `
      });
    });

    chrome.tabs.create({ url: 'https://chat.openai.com/' });

  });
  