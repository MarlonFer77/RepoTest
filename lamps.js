const luz = document.querySelector('.luz')
const apagada = document.querySelector('.apagada')
const acesa = document.querySelector('.acesa')
const interruptor = document.querySelector('#inter')

interruptor.addEventListener('click', () => {
    luz.classList.toggle('acesa')
})