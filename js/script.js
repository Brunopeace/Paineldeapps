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

// Opcional: Remover o botão após um tempo se o usuário não interagir
setTimeout(() => {
    if (deferredPrompt && installButton) {
        installButton.remove();
        console.log('Botão de instalação removido por inatividade.');
    }
}, 15000); // Remove o botão após 15 segundos







function enlargeAndShrink(img) {
        img.classList.add('enlarged');
        setTimeout(() => {
            img.classList.remove('enlarged');
        }, 4000); // 3 segundos
    }





let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar/retroceder no slide
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
    slideIndex = Array.from(images).indexOf(imgElement) + 1;
    modal.style.display = "block";
    updateModalSlides();
}

// Atualiza o modal para mostrar a imagem correspondente ao slideIndex
function updateModalSlides() {
    const images = document.getElementsByClassName("slider");
    const modalImg = document.getElementById("modalImage");

    if (slideIndex > images.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = images.length;
    }

    modalImg.src = images[slideIndex - 1].src;
}

// Função para avançar/retroceder nas imagens dentro do modal
function plusSlidesModal(n) {
    slideIndex += n;
    updateModalSlides();
}

// Fechar o modal ao clicar no botão de fechar (X)
document.querySelector("#imageModal .close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
};

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Adiciona eventos para as setas de navegação dentro do modal
document.getElementById("modalPrev").onclick = function() {
    plusSlidesModal(-1);
};

document.getElementById("modalNext").onclick = function() {
    plusSlidesModal(1);
};
