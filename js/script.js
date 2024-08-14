<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="img/icon1024.png">
    <title>Painel de Download de Apps</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="manifest" href="manifest.json">
    </head>
<body>
    <div class="container">
        
        
        <div class="slideshow-container">
    <div class="mySlides fade">
        <img class="slider" src="img/up.jpg" alt="Imagem 1" onclick="openModal(this)">
    </div>
    
    <div class="mySlides fade">
        <img class="slider" src="img/cliente.jpg" alt="Imagem 2" onclick="openModal(this)">
    </div>
    
    <div class="mySlides fade">
        <img class="slider" src="img/renovados.jpg" alt="Imagem 3" onclick="openModal(this)">
    </div>
    
    <div class="mySlides fade">
        <img class="slider" src="img/lixeira.jpg" alt="Imagem 4" onclick="openModal(this)">
    </div>
    
    <div class="mySlides fade">
        <img class="slider" src="img/down.jpg" alt="Imagem 5" onclick="openModal(this)">
    </div>

    <!-- Botões de navegação -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
    <!-- Modal para exibir imagem ampliada -->


<!-- Pontos indicativos -->
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span> 
    <span class="dot" onclick="currentSlide(2)"></span> 
    <span class="dot" onclick="currentSlide(3)"></span> 
    <span class="dot" onclick="currentSlide(4)"></span> 
    <span class="dot" onclick="currentSlide(5)"></span> 
</div>
</div>
<!-- Modal para exibir imagem ampliada -->
<div id="imageModal" class="modal">
    <span class="close">&times;</span>
    <a class="prev" id="modalPrev">&#10094;</a>
    <img class="modal-content" id="modalImage">
    <a class="next" id="modalNext">&#10095;</a>
</div>
<br>
    <hr>
    <strong>Organize, Simplifique, Controle!</strong>

📱 <p>Gerencie as datas de vencimento dos seus clientes com total facilidade e conveniência, tudo ao alcance das suas mãos, seja no seu dispositivo móvel ou desktop.!</p>


        <button id="showPropaganda">Saiba mais!</button>

<div id="propagandaModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>🛠️ Gerenciador de Clientes</h2>
        <p class="txt"><strong>Organize, Simplifique, Controle!</strong></p>
        
        <h3>🚀 Funcionalidades principais:</h3>
        <ul>
            <li><strong>Adição e Edição Rápida:</strong> Cadastre e atualize seus clientes com apenas alguns cliques.</li>
            <li><strong>Lista de Clientes:</strong> Visualize e organize seus clientes de forma clara e intuitiva.</li>
            <li><strong>Offline? Sem problemas!</strong> Mesmo sem internet, o app continua funcionando graças à tecnologia PWA.</li>
            <li><strong>Backup Seguro:</strong> Exporte e importe seus dados de clientes com facilidade, garantindo que nada seja perdido.</li>
            <li><strong>Modo Escuro:</strong> Proteja seus olhos com o modo escuro integrado.</li>
        </ul>
        
        <h3>🔔 Não Perca Nenhum Prazo com o Gerenciador de Clientes!</h3>
        <p class="txt"><strong>🎨 Destacando o que Realmente Importa:</strong></p>
        <ul>
            <li><strong>📅 Vencimento Hoje:</strong> O cliente aparece em <span style="color: yellow;">amarelo</span> — não deixe passar!</li>
            <li><strong>⏳ Faltam 2 Dias:</strong> O cliente é marcado em <span style="color: orange;">laranja</span> — não deixe de avisar a seu cliente! Com a tecnologia WhatsApp com apenas um clique a mensagem já vai pronta com a data de vencimento e seu PIX para você não ter trabalho de ficar digitando a mensagem.</li>
            <li><strong>❌ Já Venceu:</strong> O cliente é exibido em <span style="color: red;">vermelho</span> — Tome as medidas necessárias imediatamente! Se o cliente não renovar, você pode excluí-lo sem preocupações, pois ele será movido diretamente para a lixeira. E o melhor de tudo, você pode restaurá-lo a qualquermomento.</li>
        </ul>
  <p class="txt">📊 Gerencie com Eficiência e Tranquilidade:</p>
        <ul>
            <li>Foco nas Prioridades: Veja rapidamente quais clientes precisam de ação.</li>
            <li>Organização Simplificada: Nunca mais se preocupe em lembrar datas manualmente.</li>
            <li>Funcionalidade Inteligente: Deixe o Gerenciador de Clientes cuidar dos detalhes para você!</li>
        </ul>
        
        <h3>🌟 Porque escolher o Gerenciador de Clientes?</h3>
        <ul>
            <li><strong>Instalação Simples:</strong> Instale o app diretamente do navegador e tenha-o sempre à mão.</li>
            <li><strong>Totalmente Responsivo:</strong> Desfrute de uma experiência perfeita em qualquer dispositivo.</li>
            <li><strong>Economia de Tempo:</strong> Automatize a organização dos seus clientes e foque no que realmente importa.</li>
        </ul>
        
        <h3>🎯 Ideal para você que:</h3>
        <ul>
            <li>Trabalha com vendas e precisa de um controle eficiente dos seus clientes.</li>
            <li>Quer um app leve, rápido e que funciona em qualquer lugar.</li>
            <li>Busca uma solução que acompanhe o crescimento do seu negócio.</li>
        </ul>
        
        <p class="txt">🔗 <strong>Experimente agora mesmo</strong> e descubra como o Gerenciador de Clientes pode transformar a gestão do seu negócio!</p>
        <p class="txt"><strong>Peça agora mesmo o seu</strong> e comece a simplificar sua rotina!</p>
        
        
        <br>
        <hr>
        <br>
 <footer><strong>Gerenciador de Clientes - Porque seu sucesso começa com uma boa organização!</strong></footer>
    </div>
</div>
<hr>
<br><br><br>

<img src="https://i.ibb.co/89T9gGF/Background-Eraser-20240530-194623249.png" alt="Logo" class="logo">

        <h1>Download de Apps</h1>
        
        <p>
            Para baixar qualquer aplicativo deste site no seu <strong>tvbox</strong> ou na sua <strong>smartv,</strong> baixe o aplicativo <strong>ntDown</strong> na Play Store, abra-o e insira o código do ntDown do aplicativo que deseja instalar.
        </p>
        <p>
           Já no seu celular é só clicar no botão Baixar.
        </p>
        
        <ul class="app-list">
            <li class="app-item">
                <div class="app-info">
                    <img src="https://i.ibb.co/bNky8Gf/Whats-App-Image-2024-02-21-at-21-28-57.jpg" alt="IPTV CLIENTE V2" onclick="enlargeAndShrink(this)">
                    <div>
                        <span class="app-name">IPTV CLIENTE v2</span>
                        <span class="app-description">HTTP<br><br>ntDown 89263<br><br>Downloader 983309</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/89263" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="https://i.ibb.co/tY5kRKc/Whats-App-Image-2024-02-21-at-21-26-02.jpg" alt="IPTV CLIENTE V2" onclick="enlargeAndShrink(this)">
                    <div>
                        <span class="app-name">NOINU 3.0</span>
                        <span class="app-description">HTTP C/ DNS<br><br>ntDown 24240<br><br>Downloader 922517</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/24240" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="https://i.ibb.co/r5x5xbt/logo-h3.png" alt="IPTV CLIENTE V2" onclick="enlargeAndShrink(this)">
                    <div>
                        <span class="app-name">UNION GOLD</span>
                        <span class="app-description">HTTP<br><br>ntDown 92394<br><br>Downloader 300108</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/92394" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="https://i.ibb.co/HnL7fpg/Whats-App-Image-2024-02-21-at-21-29-49.jpg" alt="U2P BETA DNS" onclick="enlargeAndShrink(this)">
                    <div>
                        <span class="app-name">U2P BETA</span>
                        <span class="app-description">C/ DNS<br><br>ntDown 97578<br><br>Downloader 471343</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/97578" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
<img src="img/UNIONP2PULTRA-7.2.4.jpg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">UNION P2P ULTRA 7.2.4</span>
                        <span class="app-description">P2P<br>ntDown 25563<br><br>Downloader 143819</span>
                    </div>
                </div>
                <a href="http://dl.ntdev.in/25563" class="download-btn">Baixar</a>
           
            <li class="app-item">
                <div class="app-info">
                    <img src="img/Unionlite-4.5.8.jpeg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div> 
         <span class="app-name">Union lite 4.5.8</span>
                        <span class="app-description">ntDown 95954<br><br>Downloader 410119</span>
                    </div>
                </div>
                <a href="http://dl.ntdev.in/95954" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="https://i.ibb.co/r5x5xbt/logo-h3.png" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
                        <span class="app-name">U9ION Premium</span>
                        <span class="app-description">HTTP<br>ntDown 91917<br><br>Downloader 280293</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/91917" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="img/P2P-5.6.5.jpeg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">P2P 5.6.5</span>
                        <span class="app-description">P2P C/ DNS<br>ntDown 99785<br><br>Downloader 103582</span>
                    </div>
                </div>
                <a href="http://dl.ntdev.in/99785" class="download-btn">Baixar</a>
            </li>

            <li class="app-item">
                <div class="app-info">
                    <img src="img/UNION-TV.jpeg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">UNION TV</span>
                        <span class="app-description">P2P<br>ntDown 91917<br><br>Downloader 300108</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/91917" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="img/UNION-Smarters.jpeg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">UNION Smarters</span>
                        <span class="app-description">HTTP<br>ntDown 17644<br><br>Downloader 783526</span>
                    </div>
                </div>
                <a href="http://dl.ntdev.in/17644" class="download-btn">Baixar</a>
            </li>

            <li class="app-item">
                <div class="app-info">
                    <img src="img/XYZ-PLAYER-P2P.jpg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">XYZ PLAYER P2P 6.2.4</span>
                        <span class="app-description">P2P<br>ntDown 52745<br><br>Downloader 875007</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/52745" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="img/XYZ-SMARTERS.jpg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">XYZ SMARTERS</span>
                        <span class="app-description">HTTP<br>ntDown 64326<br><br>Downloader 740622</span>
                    </div>
                </div>
                <a href="https://dl.ntdev.in/64326" class="download-btn">Baixar</a>
            </li>
            
            <li class="app-item">
                <div class="app-info">
                    <img src="img/WINDOWS.jpeg" alt="App 3 Icon" onclick="enlargeAndShrink(this)">
                    <div>
<span class="app-name">IPTV SMARTERS WINDOWS</span>
                        <span class="app-description">Computador</span>
                    </div>
                </div>
                <a href="https://tinyurl.com/winsmarter" class="download-btn">Baixar</a>
            </li>
            
            <br>
                <hr>
                <div class="dns">
                    <strong>📌 DNS´s ✅ </strong>


<p class="dnss">Provedor XCloud:</p> <strong>Union10</strong>


<p class="dnss">DNS Smarters 1:</p> <strong>http://xpn01.xyz</strong>


<p class="dnss">DNS XCIPTV 1:</p> <strong>https://srv01.top</strong>


<p class="dnss">DNS XCIPTV 2:</p> <strong>https://sr.xdriver01.xyz</strong>


<p class="dnss">DNS STB V3 BR:</p> <strong>209.14.71.101</strong>


<p class="dnss">EPG:</p> <strong>https://abre.ai/u9epg1</strong>


<p class="dnss">Webplayer:</p> <strong>http://unionplayer.xyz</strong>
                    
                </div>
                <hr>
            
        </ul>
    </div>

   <!-- Script para escalar a imagem temporariamente -->
    <script>
    
    </script>

    <!-- Script para o contador global de visitas -->
    <script src="js/script.js"></script>
</body>
</html>