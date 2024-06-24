/*
Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
/

*\
for (inicialização; condição; incremento/decremento) {
    // código a ser executado repetidamente
}
*/

/*
while (condição) {
    // código a ser executado repetidamente
}
*/


/*Function para nota */
function validarNota() {

    var nota = Number(document.getElementById('nota1').value);
    var mostrarMensagem = document.getElementById('MostrarMensagem')
    if (nota < 0 || nota > 10) {
        mostrarMensagem.textContent = `Valor inserido: ${nota} é invalido!, tente novamente.`;

    } else {
        mostrarMensagem.textContent = `Valor inserido ${nota} é válido pode continua!`;
    }

    document.getElementById('nota1').value = '';
}

/*function para Autenticar */

 function autenticar() {
            var nome = document.getElementById('nome').value;
            var senha = document.getElementById('senha').value;
            var resultado = document.getElementById('Autenticar');

          do{
            if(nome === senha){
                resultado.innerHTML = `Erro tente novamente`;
                resultado.style.color = 'red'
                break
            }else{
                resultado.innerHTML = `Sucesso`;
                resultado.style.color = 'green';
                break;
            }
          }
          while (true) 
        document.getElementById('nome').value = '';
        document.getElementById('senha').value = '';
        }

/*function para valicar numero inteiro*/
function validarNumero(){
    var numero = Number(document.getElementById('numero').value);
    var mostrarNumero = document.getElementById('MostrarNumero');

    do {
        if(numero % 2 === 1){
            mostrarNumero.innerHTML = 'É impar';
            break;
        }else if(numero % 2 === 0){
            mostrarNumero.innerHTML = 'É par';
            break;
        }
    }while(true)
        document.getElementById('numero').value = '';
}