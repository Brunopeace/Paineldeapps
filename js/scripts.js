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
          // NOVO
// Atualizar os contadores na página
function updateDownloadCounts() {
  get(ref(db, "downloads")).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      Object.keys(data).forEach((appId) => {
        document.getElementById(`downloads_${appId}`).textContent = data[appId].contador || 0;
      });
    }
  });
}

// Chama a função ao carregar a página
updateDownloadCounts();

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// Inicializa o banco de dados
const db = getDatabase();

// Cria a estrutura inicial caso ainda não exista
function criarEstruturaInicial() {
  set(ref(db, "downloads"), {
    union_p2p_beta: {
      nome: "UNION P2P beta 5.6.5 DNS",
      contador: 99785
    },
    union_p2p_ultra: {
      nome: "UNION P2P ultra 7.2.4",
      contador: 25563
    },
    union_iptv_gold: {
      nome: "UNION IPTV GOLD",
      contador: 92394
    },
    union_iptv_smarters: {
      nome: "UNION IPTV SMARTERS",
      contador: 17644
    }
  });
}

//termina aqui

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