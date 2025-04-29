function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
        
    if(botao.classList.contains('dashboard__item__button--return')) {
           botao.classList.remove('dashboard__item__button--return') ;
       }else{
         botao.classList.add('dashboard__item__button--return');
    }

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented') ;
    }else{
        imagem.classList.add('dashboard__item__img--rented');
    }

    

}


   // let texto = document.getElementById('')
    //    if(botao.classList.contains('dashboard__items__item>')) {
     //   botao.classList.remove('dashboard__items__item>') ;
    //    botao.classList.add('dashboard__item__img dashboard__item__img--rented>');
   // }else{
   //     botao.classList.add('dashboard__items__item');
    //    botao.classList.remove('dashboard__item__img dashboard__item__img--rented');
   // 
