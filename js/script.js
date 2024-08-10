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

// Função para avançar/retroceder no slide principal
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para selecionar um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Função para exibir os slides
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função para abrir o modal e exibir a imagem clicada
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imgElement.src;

    // Atualiza slideIndex para corresponder à imagem clicada
    slideIndex = Array.from(document.getElementsByClassName("slider")).indexOf(imgElement) + 1;
    updateModalSlides();
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Função para atualizar as imagens no modal
function updateModalSlides() {
    const modalImage = document.getElementById("modalImage");
    const slides = document.getElementsByClassName("slider");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    modalImage.src = slides[slideIndex - 1].src;
}

// Função para avançar/retroceder no modal
function plusSlidesModal(n) {
    slideIndex += n;
    updateModalSlides();
}

// Fechar o modal ao clicar no "X"
document.getElementsByClassName('close')[0].addEventListener('click', closeModal);

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Abre o modal de propaganda
document.getElementById('showPropaganda').addEventListener('click', function() {
    document.getElementById('propagandaModal').style.display = 'block';
});

// Fechar o modal de propaganda ao clicar no "X"
document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('propagandaModal').style.display = 'none';
});

// Fechar o modal de propaganda ao clicar fora do conteúdo
window.onclick = function(event) {
    const propagandaModal = document.getElementById('propagandaModal');
    if (event.target === propagandaModal) {
        propagandaModal.style.display = 'none';
    }

    const imageModal = document.getElementById('imageModal');
    if (event.target === imageModal) {
        closeModal();
    }
};
