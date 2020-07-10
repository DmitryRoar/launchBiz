const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const burgerBtn = $('.header-menu__burger')
const burgerMenu = $('.burger-menu')

const header = $('header')


burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('overflowHidden')
    burgerMenu.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    header.classList.toggle('active')
})

const canStartedBtn = $$('.qa__li')

canStartedBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        event.target.classList.toggle('can-started')
    })
})

console.log('hello')
