//Declarando Array - Objetos

var list=[
    {"Valor1":5,"Valor2":5,"resultado":25},
    {"Valor1":6,"Valor2":6,"resultado":36},
    {"Valor1":4,"Valor2":4,"resultado":16},
    ];


//Recarregar a tabela - Inicio

function recarregaTabela(ContaLista) {
    var tabela = '<thead><tr><td> <b>Valor 1</b></td><td> <b>Valor 2</b></td><td> <b>Resultado</b></td></thead></tbody>'

    //<tr><td>Dama</td><td>20</td><td>R$ 3,20</td><td>Editar | Deletar</td></tr></tbody>

    for(var key in ContaLista) {
        tabela+='<tr><td>'+ContaLista[key].Valor1+'</td><td>'+(ContaLista[key].Valor2)+'</td><td>'+ContaLista[key].resultado+'</td><td><button id="btnAdiciona" onclick="ContaAlteracao('+key+')" class="btn" style="background-color: #e9c46a; margin-bottom: 10px;" type="button">Editar</button> | <button id="btnAdiciona" onclick="excluiDado('+key+')" class="btn" style="background-color: #9e2a2b; color:white; margin-bottom: 10px;" type="button">Excluir</td></tr>'
    }
    tabela+='</tbody>'
    document.getElementById('listatabela').innerHTML=tabela
}

//Recarregar a tabela - Fim

recarregaTabela(list)

//Adicionar - Inicio
function recebeDados() {

    if(!validacao()){
        return;
    }

    var multiplica = document.getElementById('n1').value
    var multiplicador = document.getElementById('n2').value
    var multi = Number(n1.value) * Number(n2.value)

    list.unshift({'Valor1':multiplica,'Valor2':multiplicador,'resultado':multi})
    recarregaTabela(list)
    resetForm()
}
//Adicionar - Fim


//Alterar Dados - Inicio
function ContaAlteracao(key){

    var AlterarConta = list[key]
    document.getElementById('n1').value=AlterarConta.Valor1
    document.getElementById('n2').value=AlterarConta.Valor2
    document.getElementById('btnAltera').style.display='inline-block'
    document.getElementById('btnAdiciona').style.display='none'
    document.getElementById("keyAlterado").innerHTML='<input id="keyAlt" value="'+key+'" readonly>';
    document.getElementById('')
}

function resetForm() {
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('btnAltera').style.display='none';
    document.getElementById('btnAdiciona').style.display='inline-block';

}

function ContaUpdate() {

    var num1 = document.getElementById("n1")
    var num2 = document.getElementById("n2")
    var  multi = Number(num1.value) * Number(num2.value)

    return multi
}

function updateDado() {
    if(!validacao()){
        return;
    }

    var key = document.getElementById('keyAlt').value
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value


    list[key] = {"Valor1":n1,"Valor2":n2, "resultado":ContaUpdate()}
    resetForm()
    recarregaTabela(list)
}
//Alterar Dados - Fim



//Excluir Dados - Inicio
function excluiDado(key) {
    if(confirm("Você deseja realmente EXCLUIR o jogo?")){
        if(key===list.length-1){
            list.pop()
        }else if(key === 0) {
            list.shift()
        } else {
            var listIni = list.slice(0, key);
            var listFim = list.slice(key+1);
            list = listIni.concat(listFim);
        }
        recarregaTabela(list)
    }
    
}

function excluiLista(){
    if(confirm("Você deseja APAGAR TODO O HISTÓRICO?")){
        list = [];
        recarregaTabela(list)
    }
}
//Excluir Dados - Fim