/*              list btn                      */
const newDeposBtn = $c('.new-deposit__btn')
const yourDeposBtn = $c('.your-deposit__btn')
const partnersBtn = $c('.partnerrs__btn')
const promoMaterialBtn = $c('.proto-material__btn')
const feedbackBtn = $c('.feedback__btn')
const supportBtn = $c('.support__btn')

const menuInfo = $c('.new-deposit-info')

function addEventOnBtn(btn, fn) {
    return btn.addEventListener('click', fn)
}

addEventOnBtn(newDeposBtn, () => {
    feedbackInfo.style.display = 'none'
    partnersInfo.style.display = 'none'
    supportInfo.style.display = 'none'
    yourDeposInfo.style.display = 'none'
    promoInfo.style.display = 'none'



    menuInfo.style.display = 'block'
})

const yourDeposInfo = $c('.your-deposit-info')

addEventOnBtn(yourDeposBtn, () => {
    feedbackInfo.style.display = 'none'
    partnersInfo.style.display = 'none'
    supportInfo.style.display = 'none'
    menuInfo.style.display = 'none'
    promoInfo.style.display = 'none'

    yourDeposInfo.style.display = 'block'
})

const partnersInfo = $c('.partners-info')

addEventOnBtn(partnersBtn, () => {
    menuInfo.style.display = 'none'
    feedbackInfo.style.display = 'none'
    supportInfo.style.display = 'none'
    yourDeposInfo.style.display = 'none'
    promoInfo.style.display = 'none'


    partnersInfo.style.display = 'block'
})

const promoInfo = $c('.promo-info')

addEventOnBtn(promoMaterialBtn, () => {
    menuInfo.style.display = 'none'
    feedbackInfo.style.display = 'none'
    supportInfo.style.display = 'none'
    yourDeposInfo.style.display = 'none'
    partnersInfo.style.display = 'none'
    

    promoInfo.style.display = 'block'
})

const feedbackInfo = $c('.feedback-info')

addEventOnBtn(feedbackBtn, () => {
    console.log('feed')
    menuInfo.style.display = 'none'
    partnersInfo.style.display = 'none'
    supportInfo.style.display = 'none'
    yourDeposInfo.style.display = 'none'
    promoInfo.style.display = 'none'


    feedbackInfo.style.display = 'block'
})

const supportInfo = $c('.support-info')

addEventOnBtn(supportBtn, () => {
    menuInfo.style.display = 'none'
    partnersInfo.style.display = 'none'
    feedbackInfo.style.display = 'none'
    yourDeposInfo.style.display = 'none'
    promoInfo.style.display = 'none'


    supportInfo.style.display = 'block'
})