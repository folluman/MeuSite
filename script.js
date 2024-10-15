const menu_burger = document.querySelector('.menu_hamburguer')
const links = document.querySelector('.menu_hamburguer__links')
const loggingIn = document.querySelector('.loggingIn')
const site = document.querySelector('.site')

ScrollReveal({ reset: true });

setTimeout(() => {
    loggingIn.classList.add('hidden__loggingIn');
}, 5000)

setTimeout(() => {
    site.classList.remove('hidden__site')

    menu_burger.addEventListener('click', function() {
        links.classList.toggle('hidden')
    })
    
    ScrollReveal().reveal('.apresentacao_animation', { 
        delay: 1000,
     })
    
    ScrollReveal().reveal('.apresentacao__sobre , .apresentacao_skills', { 
        duration: 2000,
        distance: '90px',
     });
    
    ScrollReveal().reveal('.projetos', {
        delay: 500,
    })

}, 6000)