//Função para calcular
function calculate(operation){
    var num1 = parseFloat(prompt("Digite o primeiro número: "));
    if(!confirm("Você digitou: " + num1 + ", Confirmar?")){
        return;
    }
    var num2 = parseFloat(prompt("Digite o segundo número: "))
    if(!confirm("Você digitou: " + num2 + ", Confirmar?")){
        return;
    }

    var result;
    if(operation === 'add'){
        result= num1 + num2;
        alert("O resultado da adição é: " + result);
    } else if(operation === 'subtract'){
        result= num1 - num2;
        alert("O resultado da subtração é: " + result);    
    }else if(operation === 'multiply'){
        result= num1 * num2;
        alert("O resultado da multiplicação é: " + result);
    }else if(operation === 'divide'){
        if (num2 === 0){
            alert("Erro: divisão por zero.");
            return;
        }
        result = num1 /num2;
        alert("O resultado da divisão é: " + result)
    }    
}