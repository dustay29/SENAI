
function validacao() {
    let input = document.getElementById("input")
    let resultado = document.getElementById("resultado")
    let numCartao;

    numCartao = input.value
    if (numCartao.length != 16) {
        resultado.innerHTML += ("Cartão Inválido por números")
        return
    }
    if (numCartao.startsWith("0")) { // .startsWith() - Seleciona o primeiro caractere
        resultado.innerHTML = ("Cartão Inválido pelo digito 0")
        return
    }
    if (isNaN(numCartao)) { // IsNaN() - Só funciona números
        resultado.innerHTML = ("Cartão Inválido por letras")
        return
    }
    else {
        resultado.innerHTML = ("Cartão Válido")
    }
}

validacao()