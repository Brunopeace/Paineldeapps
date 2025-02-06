if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("Service Worker registrado com sucesso."))
    .catch((err) => console.log("Erro ao registrar o Service Worker:", err));
}

let deferredPrompt;
const installButton = document.getElementById("install-button");

// Monitora o evento `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = "flex"; // Exibe o botão de instalação

  installButton.addEventListener("click", async () => {
    if (deferredPrompt) {
      installButton.style.display = "none"; // Esconde o botão
      deferredPrompt.prompt(); // Mostra o prompt de instalação

      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("Usuário aceitou instalar o PWA.");
      } else {
        console.log("Usuário recusou a instalação do PWA.");
      }
      deferredPrompt = null;
    }
  });
});

// Oculta o botão quando o app for instalado
window.addEventListener("appinstalled", () => {
  console.log("Aplicativo foi instalado com sucesso!");
  installButton.style.display = "none";
});