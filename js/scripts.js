if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("./service-worker.js")
.then(() => console.log("Service Worker registrado com sucesso."))
.catch((err) => console.log("Erro ao registrar o Service Worker:", err));
}

let deferredPrompt;
const installButton = document.getElementById("install-button");

// Monitora o evento beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = "block"; // Exibe o botão de instalação
});

// Evento de clique no botão de instalação
installButton.addEventListener("click", () => {
  if (!deferredPrompt) return;

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

// Opcional: mensagem quando já instalado
window.addEventListener("appinstalled", () => {
  console.log("Aplicativo foi instalado com sucesso!");
});

import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Inicializa o Firestore
const db = getFirestore();

// Atualiza a contagem de downloads ao carregar a página
document.addEventListener("DOMContentLoaded", async function () {
  const elements = document.querySelectorAll(".download-count");

  elements.forEach(async (element) => {
    const appName = element.getAttribute("data-app");
    const appRef = doc(db, "downloads", appName);

    try {
      const docSnap = await getDoc(appRef);
      if (docSnap.exists()) {
        element.innerText = docSnap.data().count;
      }
    } catch (error) {
      console.error("Erro ao carregar contagem de downloads:", error);
    }
  });
});