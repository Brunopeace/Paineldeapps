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

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtQKil0mLHMj0U9xpx5xvpIByiHEqZC7o",
  authDomain: "downloads-8bb3e.firebaseapp.com",
  projectId: "downloads-8bb3e",
  storageBucket: "downloads-8bb3e.firebasestorage.app",
  messagingSenderId: "525179646091",
  appId: "1:525179646091:web:d6d49616df45f99bf4e48e",
  measurementId: "G-8ZGSEH9X46"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Autenticar anonimamente antes de acessar Firestore
signInAnonymously(auth)
  .then(() => console.log("Usuário autenticado anonimamente."))
  .catch((error) => console.error("Erro na autenticação:", error));

// Esperar autenticação antes de acessar Firestore
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuário autenticado:", user.uid);
    carregarContagemDownloads(); // Chama a função para carregar downloads
  }
});

// Função para atualizar a contagem de downloads ao carregar a página
async function carregarContagemDownloads() {
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
}

// Função para copiar link do aplicativo
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const link = e.target.getAttribute("data-link");

    navigator.clipboard.writeText(link).then(() => {
      e.target.innerText = "Link copiado! ✅";
      setTimeout(() => {
        e.target.innerText = "Copiar link";
      }, 2000);
    }).catch(() => {
      alert("Não foi possível copiar o link. Copie manualmente: " + link);
    });
  }
});