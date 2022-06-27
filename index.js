const lastSection = document.querySelector('.last-section')
const vButton = document.querySelector('.v-upside')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const hambugerMenu = document.querySelector('.hambuger-menu')
const line = document.querySelector('.line')
const back = document.querySelector('.back')
const aa = document.querySelector('.aa')


vButton.addEventListener('click', () => {
    lastSection.classList.toggle('active')
    vButton.classList.toggle('active')
})

hamburger.addEventListener('click', () => {
    hambugerMenu.classList.toggle('active')
    aa.classList.toggle('active')
})
line.addEventListener('click', () => {
    hambugerMenu.classList.toggle('active')
    aa.classList.toggle('active')
})
back.addEventListener('click', () => {
    hambugerMenu.classList.toggle('active')
    aa.classList.toggle('active')
})