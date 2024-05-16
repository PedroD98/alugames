let jogosAlugados;

function numeroDeJogosAlugados() {
    console.log(`Jogos alugados: ${jogosAlugados}.`);
}

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector(".dashboard__item__img");
    let botao = game.querySelector(".dashboard__item__button");
    let nome = game.querySelector(".dashboard__item__name");


    if (botao.classList.contains("dashboard__item__button--return")){
        if (confirm(`Aperte OK para confirmar a devolução do jogo ${nome.innerHTML}`)){;
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = 'Alugar';
        imagem.classList.remove("dashboard__item__img--rented");
        jogosAlugados--;
        }
        
   } else {
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = 'Devolver';
        imagem.classList.add("dashboard__item__img--rented");
        jogosAlugados++;
   }

   numeroDeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    numeroDeJogosAlugados();
});