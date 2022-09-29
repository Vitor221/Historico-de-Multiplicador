function setConfig(){
    var texts ={
        "titulo":"Histórico de Multiplicador"
    };
    document.title = texts.titulo;
    document.getElementById("navTitle").style.color = "white"
    document.getElementById("navTitle").style.fontSize = "30px"
    document.getElementById("numerico1").style.color = "white"
    document.getElementById("numerico1").style.fontSize = "20px"
    document.getElementById("numerico1").style.backgroundColor = "#0077b6"
    document.getElementById("numerico1").style.padding = "10px"
    document.getElementById("numerico1").style.borderRadius = "4px"
    document.getElementById("numerico2").style.color = "white"
    document.getElementById("numerico2").style.fontSize = "20px"
    document.getElementById("numerico2").style.backgroundColor = "#0077b6"
    document.getElementById("numerico2").style.padding = "10px"
    document.getElementById("numerico2").style.borderRadius = "4px"

    
}
setConfig();

function recebeDados(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var resposta = [n1,n2];
    console.log(resposta[0]);
    console.log(resposta[1]);
    if (resposta[0] <= resposta[1]){
        alert("Erro. O primeiro número é menor ou igual ao segundo\nEntre com novos valores");
        document.getElementById("n1");
        document.getElementById("n2");
    }
}

function validacao() {
    var num1 = document.getElementById('n1').value
    var num2 = document.getElementById('n2').value
    var erro = ""

    document.getElementById("erro").style.display = "none"

    if(parseInt(num1) < parseInt(num2)){
        erro += '<p>Favor Valor 1 maior que Valor 2</p>'
    }


    if(num1 === ""){
        erro += '<p>Favor inserir número ao Valor 1</p>' 
    } else if(num1 != parseInt(num1)) {
        erro += '<p>Favor informar apenas números inteiros no Valor 1</p>'
    }

    if(num2 === ""){
        erro += '<p>Favor inserir número ao valor 2</p>'
    } else if(num2 != parseInt(num2)) {
        erro += '<p>Favor informar apenas números inteiros no Valor 2</p>'
    }

    if(erro != ""){
        document.getElementById("erro").style.display = "block"

        document.getElementById("erro").style.backgroundColor = "red"
        document.getElementById("erro").style.padding = "22px"
        document.getElementById("erro").style.margin = "21px"
        document.getElementById("erro").style.borderRadius = "8px"
        document.getElementById("erro").style.color = "white"

        document.getElementById("erro").innerHTML = "<h3>ERRO: </h3>"
        + erro
        return 0
    }else {
        return 1
    }
}

