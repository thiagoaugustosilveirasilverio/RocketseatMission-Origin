
/*Abre e fecha o menu quando clicado no icone: Menu e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
    element.addEventListener('click', function (){
        nav.classList.toggle('show')
    })
}

/*Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links)  {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
    } else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/*Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true
})

/*ScrollReveal: mostrar elementos quandode der scroll na página */

const scrollReveal = ScrollReveal ({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, {interval:100})