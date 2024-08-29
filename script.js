const btnSoma = document.getElementById('btnSoma');
const btnSubtrai = document.getElementById('btnSubtrai');
const numeroNaTela = document.getElementById('resultado');
let n1 = 0

btnSoma.addEventListener('click', () => {
    n1++
    numeroNaTela.innerText = n1
});


btnSubtrai.addEventListener('click', () => {
    n1--
    numeroNaTela.innerText = n1
});

