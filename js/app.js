let alugados = 1;

function alterarStatus(id){
    
    let jogoClicado = document.getElementById(`game-${id}`);
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`você tem certeza que quer devolver o jogo ${nomeJogo.textContent}`)){;
        imagem.classList.remove('dashboard__item__img--rented') ;
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'alugar';
        alugados--
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'devolver';
        alugados++
    }

    jogosAlugados()

}


function jogosAlugados(){
console.log(`os jogos alugados são ${alugados}`)
}
