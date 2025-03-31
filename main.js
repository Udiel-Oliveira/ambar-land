
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Adiciona um atraso de 3 segundos (3000 milissegundos)
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 30);
}); 

const video = document.getElementById("meu-video");
const botao = document.getElementById("botao-pause-play");
const icone = document.getElementById("icone");

// Ocultar o botão ao iniciar o vídeo
video.addEventListener("play", () => {
    botao.classList.add("hidden");
});

// Alternar entre Play e Pause ao clicar no botão
botao.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        icone.classList.remove("fa-play");
        icone.classList.add("fa-pause");
    } else {
        video.pause();
        icone.classList.remove("fa-pause");
        icone.classList.add("fa-play");
    }
});

const botaoTelaCheia = document.getElementById("botao-tela-cheia");

botaoTelaCheia.addEventListener("click", () => {
    if (video.requestFullscreen) {
        video.requestFullscreen(); // Função para ampliar para tela cheia
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Para navegadores baseados no WebKit
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // Para navegadores da Microsoft
    }
});
