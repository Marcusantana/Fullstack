var numero_funcionarios = parseInt(prompt("Digite o número de funcionários: "))
var quantidade_adm = 0
var quantidade_log = 0
var quantidade_inf = 0

for(vasco = 1; vasco <= numero_funcionarios ; vasco ++){

    var nome = prompt("Nome do funcionário:" )
    var setor = prompt("Nome do setor:" )

if (setor == "adm"){
    quantidade_adm++
}

else if (setor == "log"){
    quantidade_log++

}

else{
    quantidade_inf++
}

}

document.write("A quantidade de funcionarios de adm é de: "+ quantidade_adm + "<br>")

document.write("A quantidade de funcionarios de log é de: "+ quantidade_log + "<br>")

document.write("A quantidade de funcionarios de inf é de: "+ quantidade_inf)

