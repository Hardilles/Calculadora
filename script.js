function adicionarCaracter(caracter){ //funcão para escrever na tela o numero digitado//
    const valordisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = valordisplay + caracter


}

function limpaTela(){ //função para a tecla AC//
    document.querySelector(".display").value = ""
}

function calcular(){ //função para calcular//
    const valordisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valordisplay) //eval resolve o calculo//

}

function invertersinal(){ //função para inverter sinal +/-//
    const valordisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valordisplay * -1

}