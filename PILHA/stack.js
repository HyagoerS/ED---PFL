import {Node, LinkedStack} from "./linked-stack.js"

const botaoConverter = document.getElementById("botaoConverter")
botaoConverter.addEventListener("click", converter)

function converter(){
    

    const stack = new LinkedStack()

    let decimal = document.getElementById("decimal").value
    decimal = parseInt(decimal)

    let valor = decimal / 2
    let resto = 0    

    while (valor > 1){
        resto = decimal % 2
        stack.push(resto)
        valor = Math.floor(decimal / 2)
        decimal = valor
    }

    stack.push(valor)
    document.getElementById("binario").innerHTML = show_stack_itens(stack)
}