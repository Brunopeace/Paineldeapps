if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado com sucesso:', registration);
      }, function(err) {
        console.log('Falha ao registrar o Service Worker:', err);
      });
    });
  }


/* código para instalar o aplicativo */

  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Criar um botão ou outro elemento na interface para o usuário instalar
    const installButton = document.createElement('button');
    installButton.innerText = 'Instalar App';
    installButton.style.position = 'fixed';
    installButton.style.bottom = '10px';
    installButton.style.right = '10px';
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt(); // Mostra o prompt de instalação

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou instalar o app');
            } else {
                console.log('Usuário rejeitou instalar o app');
            }
            deferredPrompt = null; // Limpa o prompt armazenado
            installButton.remove(); // Remove o botão da interface
        });
    });
});




  let slideIndex = 1;
let modalSlideIndex = 1;

// Inicializa o slideshow
showSlides(slideIndex);

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

    // Ajusta o índice se estiver fora dos limites
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

    // Exibe o slide atual
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    } else {
        console.error('Slide not found for index:', slideIndex - 1);
    }

    // Adiciona a classe "active" ao ponto correspondente, se existir
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    } else {
        console.error('Dot not found for index:', slideIndex - 1);
    }
}

// Função para abrir o modal e exibir a imagem ampliada
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.getElementsByClassName("slider");

    // Define a imagem atual no modal
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
window.onclick = function(event) {
    const imageModal = document.getElementById("imageModal");
    if (event.target === imageModal) {
        imageModal.style.display = "none";
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