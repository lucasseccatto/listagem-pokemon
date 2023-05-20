const botaoAlterarTema = document.getElementById('botao-alterar-tema')
const body = document.querySelector('body')
const imagemBotaoTrocaTema = document.querySelector('.imagem-botao')
let modoEscuroAtivo = localStorage.getItem('temaEscuroAtivo')


if (modoEscuroAtivo === 'true') {
    body.classList.add('modo-escuro')
    imagemBotaoTrocaTema.setAttribute('src', './assets/moon.png')
}

botaoAlterarTema.addEventListener('click', () => {
    if (!modoEscuroAtivo){
        body.classList.add('modo-escuro')
        imagemBotaoTrocaTema.setAttribute('src', './assets/moon.png')
        localStorage.setItem('temaEscuroAtivo', true)
        modoEscuroAtivo = true
    } else {
        body.classList.remove('modo-escuro')
        imagemBotaoTrocaTema.setAttribute('src', './assets/sun.png')
        localStorage.setItem('temaEscuroAtivo', false)
        modoEscuroAtivo = false
    }
})