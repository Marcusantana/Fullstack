let numero = parseInt(prompt("informe o valor"));
let resultado = numero + 10;
var soma = 0

while (numero <= resultado){
    document.write(numero + "<br>");
    
    
    if (numero % 2 == 0){
        soma += numero

    }
    
    numero++;
}

document.write("A soma dos pares é de:" + soma + "<br>");
