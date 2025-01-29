if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso.");

      // Monitora se há uma nova versão do Service Worker disponível
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
            console.log("Nova versão do PWA disponível!");

            // Criar um botão de atualização
            let updateButton = document.createElement("button");
            updateButton.innerText = "Nova versão disponível! Atualizar";
            updateButton.style.position = "fixed";
            updateButton.style.bottom = "20px";
            updateButton.style.left = "50%";
            updateButton.style.transform = "translateX(-50%)";
            updateButton.style.padding = "10px 20px";
            updateButton.style.backgroundColor = "#1abc9c";
            updateButton.style.color = "#fff";
            updateButton.style.border = "none";
            updateButton.style.cursor = "pointer";
            updateButton.style.borderRadius = "5px";
            updateButton.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";

            document.body.appendChild(updateButton);

            updateButton.addEventListener("click", () => {
              navigator.serviceWorker.controller.postMessage("SKIP_WAITING");
              window.location.reload();
            });
          }
        };
      };
    })
    .catch((err) => console.log("Erro ao registrar o Service Worker:", err));
}

let deferredPrompt;
const installButton = document.getElementById("install-button");

// Monitora o evento `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = "block"; // Exibe o botão de instalação

  installButton.addEventListener("click", () => {
    installButton.style.display = "none"; // Esconde o botão
    deferredPrompt.prompt(); // Mostra o prompt de instalação

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou instalar o PWA.");
      } else {
        console.log("Usuário recusou a instalação do PWA.");
      }
      deferredPrompt = null;
    });
  });
});

// Mensagem quando o app é instalado
window.addEventListener("appinstalled", () => {
  console.log("Aplicativo foi instalado com sucesso!");
});