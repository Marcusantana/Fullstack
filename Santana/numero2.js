var soma_idade = 0
var quantidade_fem = 0
var quantidade_masc = 0

for (vasco = 1; vasco <=10 ; vasco++){

    idade = parseInt(prompt("Digite a idade:  "))
    sexo = prompt("Digite o sexo: ")

    if (sexo == "f"){
        quantidade_fem += idade
    }
    
    else if (sexo == "m"){
        quantidade_masc += idade
    }

}

document.write("A soma das idades é de:" + quantidade_masc + "<br>")
document.write("A soma das idades é de:" + quantidade_fem)