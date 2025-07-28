import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore, collection, getDocs, addDoc,
  updateDoc, deleteDoc, doc, setLogLevel
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGzXAQi_JLDpipw2pgufReeMNCRfDDjag",
  authDomain: "jogos-424a4.firebaseapp.com",
  projectId: "jogos-424a4",
  storageBucket: "jogos-424a4.appspot.com",
  messagingSenderId: "1079516008933",
  appId: "1:1079516008933:web:d3ed9160ea48fc3c269f0c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

setLogLevel("error");

const senhaHashCorreta = "656ac5222c7e4fc201a26ca9763d3504f76fe3cab02efda4086264f8b00f4d62";

let jogos = [];
let editandoIndex = null;
let documentos = [];

const logos = {
  "botafogo": "../img/botafogo.png",
  "corinthians": "../img/corinthians.png",
  "fortaleza": "../img/fortaleza.png",
  "bragantino": "../img/bragantino.png",
  "mirassol": "../img/mirassol.png",
  "vitoria": "../img/vitoria.png",
  "sport": "../img/sport.png",
  "santos": "../img/santos.png",
  "palmeiras": "../img/palmeiras.png",
  "gremio": "../img/gremio.png",
  "santa-cruz": "../img/santa-cruz.png",
  "ceara": "../img/ceara.png",
  "cruzeiro": "../img/cruzeiro.png",
  "sao-paulo": "../img/sao-paulo.png",
  "fluminense": "../img/fluminense.png",
  "bahia": "../img/bahia.png",
  "juventude": "../img/juventude.png",
  "internacional": "../img/internacional.png",
  "vasco": "../img/vasco.png",
  "flamengo": "../img/flamengo.png",
  "atletico": "../img/atletico.png",
  "avai": "../img/avai.png",
  "botafogo-sp": "../img/botafogo-sp.png",
  "paysandu": "../img/paysandu.png",
  "athletic": "../img/athletic.png"
  
};

function normalizarNome(nome) {
  return nome.normalize("NFD").replace(/[^\w\s-]/g, "").toLowerCase().replace(/\s+/g, "-");
}

function exibirJogos() {
  const lista = document.getElementById("listaJogos");
  lista.innerHTML = "";

  jogos.forEach((jogo, index) => {
    const keyA = normalizarNome(jogo.timeA);
    const keyB = normalizarNome(jogo.timeB);

    const logoA = logos[keyA] || "img/default.png";
    const logoB = logos[keyB] || "img/default.png";

    const div = document.createElement("div");
    div.className = "jogo";

    div.innerHTML = `
      <img src="${logoA}" alt="${jogo.timeA}">
      <span>${jogo.timeA} vs ${jogo.timeB}<br>${jogo.horario} <span class="canal2">Canal:</span><span class="canal"> ${jogo.canal}</span></span>
      <img src="${logoB}" alt="${jogo.timeB}">
    `;

    div.addEventListener("click", () => abrirModalComSenha(index));
    lista.appendChild(div);
  });
}

async function gerarHash(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function abrirModalComSenha(index) {
  const senha = prompt("Digite a senha de administrador para editar:");
  if (!senha) return;

  const hash = await gerarHash(senha);
  if (hash !== senhaHashCorreta) {
    alert("Senha incorreta!");
    return;
  }

  abrirModal(index);
}

function abrirModal(index = null) {
  editandoIndex = index;
  const modal = document.getElementById("modalFormulario");

  if (index !== null) {
    const jogo = jogos[index];
    document.getElementById("inputTimeA").value = jogo.timeA;
    document.getElementById("inputTimeB").value = jogo.timeB;
    document.getElementById("inputHorario").value = jogo.horario;
    document.getElementById("inputCanal").value = jogo.canal;
    document.getElementById("btnExcluir").style.display = "inline-block";
  } else {
    limparFormulario();
    document.getElementById("btnExcluir").style.display = "none";
  }

  modal.style.display = "flex";
}

async function abrirModalAdicionar() {
  const senha = prompt("Digite a senha de administrador para adicionar jogo:");
  if (!senha) return;

  const hash = await gerarHash(senha);
  if (hash !== senhaHashCorreta) {
    alert("Senha incorreta!");
    return;
  }

  editandoIndex = null;
  limparFormulario();
  document.getElementById("btnExcluir").style.display = "none";
  document.getElementById("modalFormulario").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalFormulario").style.display = "none";
  limparFormulario();
  editandoIndex = null;
}

function limparFormulario() {
  document.getElementById("inputTimeA").value = "";
  document.getElementById("inputTimeB").value = "";
  document.getElementById("inputHorario").value = "";
  document.getElementById("inputCanal").value = "";
}

async function excluirJogoModal() {
  if (editandoIndex !== null && confirm("Tem certeza que deseja excluir este jogo?")) {
    const docRef = doc(db, "jogos", documentos[editandoIndex]);
    await deleteDoc(docRef);
    await carregarJogos();
    fecharModal();
  }
}

async function salvarJogo(event) {
  if (event) event.preventDefault();

  const timeA = document.getElementById("inputTimeA").value.trim();
  const timeB = document.getElementById("inputTimeB").value.trim();
  const horario = document.getElementById("inputHorario").value.trim();
  const canal = document.getElementById("inputCanal").value.trim();

  if (!timeA || !timeB || !horario || !canal) {
    alert("Preencha todos os campos!");
    return;
  }

  const novoJogo = { timeA, timeB, horario, canal };

  try {
    if (editandoIndex !== null) {
      console.log("🛠 Editando jogo...");
      const docRef = doc(db, "jogos", documentos[editandoIndex]);
      await updateDoc(docRef, novoJogo);
      console.log("✅ Jogo atualizado:", docRef.id);
    } else {
      console.log("➕ Adicionando novo jogo...");
      const docRef = await addDoc(collection(db, "jogos"), novoJogo);
      console.log("✅ Novo jogo adicionado com ID:", docRef.id);
    }

    await carregarJogos();
    fecharModal();

  } catch (erro) {
    console.error("❌ Erro ao salvar jogo:", erro);
    alert("Erro ao salvar jogo. Verifique a conexão e as regras do Firebase.");
  }
}

async function carregarJogos() {
  try {
    const snapshot = await getDocs(collection(db, "jogos"));

    jogos = snapshot.docs.map(doc => doc.data());
    documentos = snapshot.docs.map(doc => doc.id);
    console.log("Jogos carregados do Firebase:");
    snapshot.docs.forEach(doc => {
      console.log(`ID: ${doc.id}`, doc.data());
    });

    exibirJogos();

  } catch (erro) {
    console.error("Erro ao carregar jogos:", erro);
  }
}

carregarJogos();

window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.salvarJogo = salvarJogo;
window.abrirModalAdicionar = abrirModalAdicionar;
window.excluirJogoModal = excluirJogoModal;
