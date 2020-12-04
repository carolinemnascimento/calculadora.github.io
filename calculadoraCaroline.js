var numero1 = 0
var operador
var numero2 = 0

function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumero(numeroDigitado) {
    var textoNoVisor = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = textoNoVisor + numeroDigitado
    }else{
        numero2 = numero2+""+numeroDigitado
 }
    document.getElementById("visor").innerHTML = textoNoVisor + numeroDigitado
}

function setarResultado(){
    var resultado
    if(numero1 && numero2 && operador){
        resultado = calcular(parseFloat(numero1), operador, parseFloat(numero2))
    }else{
        resultado = 0
    }
    document.getElementById("visor").innerHTML = resultado;
    numero1 = resultado
    numero  = 0
    operador = ""
}

function setarOperador(valor){
    if (!operador){
        operador = valor
    }else{
        setarResultado()
        operador = valor
    }
    document.getElementById("visor").innerHTML += valor
}
