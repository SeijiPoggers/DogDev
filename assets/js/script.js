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
];

let testemonialQuote = document.querySelector('.testemonials .quote');
let testemonialIcons = document.querySelector('.testemonials .icons');

for(let tindex in testemonials){
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/'+testemonials[parseInt(tindex)].origin);
    img.style.cursor = 'pointer'
    img.addEventListener('click',
        ()=>fillTestemonial(parseInt(tindex)));
    testemonialIcons.appendChild(img);
}

let currentTestemonial = 0;
let TestemonialTimer;

const fillTestemonial = (index) =>{
    clearTimeout(TestemonialTimer)
    currentTestemonial = index;
    testemonialQuote.innerHTML = testemonials[currentTestemonial].quote;
    let imgs = testemonialIcons.querySelectorAll('img');
    for(let img of imgs) img.style.opacity=0.2;
    imgs[currentTestemonial].style.opacity=1;
    TestemonialTimer = setTimeout(nextTestemonial, 3000);
}

const nextTestemonial =()=>{
    if(testemonials[currentTestemonial+1]){
        fillTestemonial(currentTestemonial+1);
    }else{
        fillTestemonial(0)
    }
}

nextTestemonial();

let currentFaq = 0

let faqItems = document.querySelectorAll('.faq .accordion .item')
faqItems.forEach((el, index)=>{
    el.querySelector('.title').addEventListener('click', ()=>setFaq(index));
})

const setFaq = (index) =>{
    currentFaq = index
    if(faqItems[currentFaq].classList.contains('opened')){
        faqItems[currentFaq].classList.remove('opened')
        return
    }
    for(let item of faqItems){
        item.classList.remove('opened')
    }
    faqItems[currentFaq].classList.add('opened')
}