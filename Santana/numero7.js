var numeros = 0 
var quantidade = 0 
 
for (vasco = 1; vasco <= 100; vasco++)  { 
        if (vasco % 2 === 0) { 
           numeros += vasco
           quantidade++
        }
  } 
var media = numeros / quantidade
document.write("A média dos números pares de 1 a 100 é: " + media)