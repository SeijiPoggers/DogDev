//menu Hamburger
let menuOpener = document.querySelector('.menu-opener')
let nav = document.querySelector('header nav')
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon')
        .style .display='none'
        menuOpener.querySelector('.hamburger-icon')
        .style .display='flex'
    }else{
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon')
        .style .display='flex'
        menuOpener.querySelector('.hamburger-icon')
        .style .display='none'
    }
})
//Testemonials
let testemonials = [
    {quote:'"Mais do que nunca, os animais são tratados como membros da família."' ,origin:'cbs.svg'},
    {quote:'"DogDev é um serviço de entrega direto ao ponto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que humanos reconheceriam."' ,origin:'forbes.svg'},
    {quote:'"DogDev usa ingredientes simples e limpos em seus produtos."' ,origin:'fox.svg'},
    {quote:'"Vejo você DogDev como um verdadeiro herói"' ,origin:'sharktank.svg'}
]

