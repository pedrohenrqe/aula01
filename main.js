'use strict'

// 3 - var -> Mutável -> Global
// 2 - let -> Mutável -> Bloco
// 1 - const -> Imutável -> Bloco

function cadastrar (){
    //  document.getElementById -> Puxar uma tag ou classe do html

    const cadastrar = document.getElementById('cadastrar')

    const nomeDigitado = prompt('Digite Nome')
    const idadeDigitado = prompt('Digite uma Idade')
    const cidadeDigitado = prompt('Digite uma Cidade')
    const mediaDigitando = prompt('Digite uma Média')

    // prompt -> Aparecer a caixa para digitação
    

    nome.textContent = nomeDigitado
    idade.textContent = idadeDigitado
    cidade.textContent = cidadeDigitado
    media.textContent = mediaDigitando

}

const botaoCadastrar = document.getElementById('cadastrar')

botaoCadastrar.addEventListener('click', cadastrar)
