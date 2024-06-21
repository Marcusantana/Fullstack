var quantidade = 0

for (vasco = 0; vasco <=9 ; vasco++){
    numero = parseFloat(prompt("Digite um número:"))
        
        if (numero > 5){
            quantidade++
        }
}

document.write("A quantidade de números maoiores que 5 é: " + quantidade)