import { getDatabase, ref, get, set, update } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// Inicializa o banco de dados
const db = getDatabase();

// Função para incrementar o contador de downloads
function incrementDownload(appId) {
  const appRef = ref(db, `downloads/${appId}`);

  get(appRef).then((snapshot) => {
    if (snapshot.exists()) {
      const newCount = (snapshot.val().contador || 0) + 1;
      update(appRef, { contador: newCount });
    } else {
      set(appRef, { nome: appId, contador: 1 });
    }
  });
}

// Atualizar os contadores na página
function updateDownloadCounts() {
  get(ref(db, "downloads")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      Object.keys(data).forEach((appId) => {
        const contadorElement = document.getElementById(`downloads_${appId}`);
        if (contadorElement) {
          contadorElement.textContent = data[appId].contador || 0;
        }
      });
    }
  });
}

// Chama a função ao carregar a página
updateDownloadCounts();

// Captura os cliques nos botões de download
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const appId = event.target.getAttribute("data-appid");
    if (appId) {
      incrementDownload(appId);
    }
  });
});

// ========== SERVICE WORKER PARA PWA ==========
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("Service Worker registrado com sucesso."))
    .catch((err) => console.log("Erro ao registrar o Service Worker:", err));
}

// Configuração de instalação do PWA
let deferredPrompt;
const installButton = document.getElementById("install-button");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = "block";
});

installButton.addEventListener("click", () => {
  if (!deferredPrompt) return;

  installButton.style.display = "none";
  deferredPrompt.prompt();

  deferredPrompt.userChoice.then((choiceResult) => {
    deferredPrompt = null;
  });
});

window.addEventListener("appinstalled", () => {
  console.log("Aplicativo foi instalado com sucesso!");
});