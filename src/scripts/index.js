const $c = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const burgerBtn = $c('.header-menu__burger')
const burgerMenu = $c('.burger-menu')

const header = $c('header')


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

$$('.reg__btn').forEach(regBtn => {
    regBtn.addEventListener('click', () => {
        $('.modalReg').modal()
    })
})

$$('.auth__btn').forEach(regBtn => {
    regBtn.addEventListener('click', () => {
        console.log('reg')
        $('.modalAuth').modal()
    })
})

console.log('%chello!!!', 'color: red')
