if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('Service Worker registrado com sucesso:', registration);
        }, function(err) {
            console.log('Falha ao registrar o Service Worker:', err);
        });
    });
}

// Lista de aplicativos disponíveis
const availableApps = ['App1', 'App2', 'App3']; // Adicione mais aplicativos conforme necessário

// Função para enviar notificações push
function enviarNotificacaoPush(titulo, corpo) {
    if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission(permission => {
            if (permission === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification(titulo, {
                        body: corpo,
                        icon: '/img/icon.png', // Altere o caminho do ícone conforme necessário
                        vibrate: [200, 100, 200],
                        tag: 'notificacao-tag'
                    });
                });
            }
        });
    }
}

// Função para verificar novos aplicativos
function checkForNewApps() {
    const storedApps = JSON.parse(localStorage.getItem('availableApps')) || [];
    const newApps = availableApps.filter(app => !storedApps.includes(app));

    if (newApps.length > 0) {
        newApps.forEach(app => {
            enviarNotificacaoPush('Novos Aplicativos Disponível!', `Baixe agora o ${app}!`);
        });
        localStorage.setItem('availableApps', JSON.stringify(availableApps));
    }
}

// Solicita permissão para notificações push ao entrar no app
window.addEventListener('load', () => {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                checkForNewApps();
            }
        });
    } else {
        checkForNewApps();
    }
});


/* Código para instalar o aplicativo */
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Criar um botão ou outro elemento na interface para o usuário instalar
    const installButton = document.createElement('button');
    installButton.id = 'installButton';
    installButton.innerText = 'Instalar App';
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou instalar o app');
                enviarNotificacaoPush('Instalação Concluída!', 'O aplicativo foi instalado com sucesso.');
            } else {
                console.log('Usuário rejeitou instalar o app');
            }
            deferredPrompt = null;
            installButton.remove();
        });
    });
});

// Opcional: Remover o botão após um tempo se o usuário não interagir
setTimeout(() => {
    if (deferredPrompt && document.getElementById('installButton')) {
        document.getElementById('installButton').remove();
        console.log('Botão de instalação removido por inatividade.');
    }
}, 15000);

let slideIndex = 1;
let modalSlideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    // Restaura o estado do slide a partir do localStorage
    const savedSlideIndex = localStorage.getItem('currentSlideIndex');
    if (savedSlideIndex) {
        slideIndex = parseInt(savedSlideIndex, 10);
    }

    // Inicializa o slideshow
    showSlides(slideIndex);

    // Adiciona eventos de teclado para navegação e acessibilidade
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                plusSlides(-1);
                break;
            case 'ArrowRight':
                plusSlides(1);
                break;
            case 'Escape':
                closeModal();
                break;
        }
    });
});

// Função para avançar/retroceder no slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para selecionar um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Exibe o slide atual
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Exibe o slide atual com animação
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade-in');
    dots[slideIndex - 1].className += " active";

    // Salva o estado atual do slide no localStorage
    localStorage.setItem('currentSlideIndex', slideIndex);
}

// Função para abrir o modal e exibir a imagem ampliada
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const images = document.getElementsByClassName("slider");

    modalSlideIndex = Array.from(images).indexOf(imgElement) + 1;
    modal.style.display = "block";
    updateModalSlides();
}

// Atualiza o modal para mostrar a imagem correspondente ao modalSlideIndex
function updateModalSlides() {
    const images = document.getElementsByClassName("slider");
    const modalImg = document.getElementById("modalImage");

    if (modalSlideIndex > images.length) {
        modalSlideIndex = 1;
    }
    if (modalSlideIndex < 1) {
        modalSlideIndex = images.length;
    }

    modalImg.src = images[modalSlideIndex - 1].src;
}

// Função para avançar/retroceder nas imagens dentro do modal
function plusSlidesModal(n) {
    modalSlideIndex += n;
    updateModalSlides();
}

// Fechar o modal de imagem ao clicar fora da imagem
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event) {
    const imageModal = document.getElementById("imageModal");
    if (event.target === imageModal) {
        closeModal();
    }

    const propagandaModal = document.getElementById('propagandaModal');
    if (event.target === propagandaModal) {
        propagandaModal.style.display = 'none';
    }
};

// Adiciona eventos para as setas de navegação dentro do modal
document.getElementById("modalPrev").onclick = function() {
    plusSlidesModal(-1);
};

document.getElementById("modalNext").onclick = function() {
    plusSlidesModal(1);
};

// Mostrar o modal de propaganda
document.getElementById('showPropaganda').addEventListener('click', function() {
    document.getElementById('propagandaModal').style.display = 'block';
});

// Fechar o modal de propaganda ao clicar no "X"
document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('propagandaModal').style.display = 'none';
});

function enlargeAndShrink(element) {
    element.style.transform = 'scale(1.5)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 3000);
}

// Estilização e animação adicional para efeitos visuais
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    #installButton {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #installButton:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(style);