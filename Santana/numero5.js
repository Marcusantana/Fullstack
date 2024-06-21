var numero1 = parseFloat(prompt("Digite o número: "))
var numero2 = parseFloat(prompt("Digite o número: "))
var numero3 = parseFloat(prompt("Digite o número: "))


if (numero1 < numero2 && numero1 < numero3 && numero2 < numero3){

    document.write(numero1)
    document.write(numero2)
    document.write(numero3)
}

else if (numero1 < numero2 && numero1 < numero3 && numero3 < numero2){

    document.write(numero1+ "<br>")
    document.write(numero3+ "<br>")
    document.write(numero2)
}

else if (numero2 < numero1 && numero2 < numero3 && numero3 < numero1){

    document.write(numero2+ "<br>")
    document.write(numero3+ "<br>")
    document.write(numero1)
}

else if (numero2 < numero1 && numero2 < numero3 && numero1 < numero3){

    document.write(numero2+ "<br>")
    document.write(numero1+ "<br>")
    document.write(numero3)
}

else if (numero3 < numero1 && numero3 < numero2 && numero1 < numero2){

    document.write(numero3+ "<br>")
    document.write(numero1+ "<br>")
    document.write(numero2)
}

else if (numero3 < numero1 && numero3 < numero2 && numero2 < numero1){

    document.write(numero3+ "<br>")
    document.write(numero2+ "<br>")
    document.write(numero1)
}

else{
    document.write("Valores iguais! Digite numero diferentes")
}