function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name')
        
    alert(nomeJogo.textContent)

    }


   // let texto = document.getElementById('')
    //    if(botao.classList.contains('dashboard__items__item>')) {
     //   botao.classList.remove('dashboard__items__item>') ;
    //    botao.classList.add('dashboard__item__img dashboard__item__img--rented>');
   // }else{
   //     botao.classList.add('dashboard__items__item');
    //    botao.classList.remove('dashboard__item__img dashboard__item__img--rented');
   // }






