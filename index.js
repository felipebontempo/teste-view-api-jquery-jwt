$(".botao-atualizar").click(atualizaTabela);

function atualizaTabela() {

        //Quando for atualizar, limpa a tablela antes de inserir novos dados.
        $("#tabela-clientes tr").remove();
        
        //pelo amor de Deus não deixa esse token exposto assim
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNjg1NDIyLCJleHAiOjE2MTYyNzc0MjJ9.f-HJxHXtUxu2PqYQ51DLMm5gA6FDwM46V5Q1JrPV_90"; //token de exemplo
        $.ajax({
        url: "http://localhost:1337/clientes/",
        type: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        },
        success: function(result){
            //console.log(result);
            result.forEach(element => {
                adicionaclienteNaTabela(element);

            });            
        },
        error: function(result){console.log(result);}
        });
        
        //Exemplo de obj JSON recebido
        /*
            {
            "id": 37,
            "nome": "ZEZINHO DA SILVA",
            "dnasc": "2016-05-31T00:00:00",
            "endereco": "R GASPAR LOURENCO 90",
            "bairro": "VL MARIANA",
            "cep": "00001-000",
            "cidade": "SÃO PAULO",
            "estado": "SP",
            "email": "NUMSEIOQMEUDEUS@GMAIL.COM",
            "published_at": "2021-02-19T19:45:22.325Z",
            "created_at": "2021-02-19T19:45:22.333Z",
            "updated_at": "2021-02-19T19:45:22.333Z"
        }
        */
    
}

function montaTr(cliente) { 
    
    var clienteTr = document.createElement("tr");
    
    clienteTr.classList.add("cliente");    
    
    //Cria as TD's e a adiciona dentro da TR.
    
    //clienteTr.appendChild(montaTd('#',"info-id"))
    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.dnasc, "info-dnasc"));
    clienteTr.appendChild(montaTd(cliente.endereco, "info-endereco"));
    clienteTr.appendChild(montaTd(cliente.bairro, "info-bairro"));
    clienteTr.appendChild(montaTd(cliente.cep, "info-cep"));
    clienteTr.appendChild(montaTd(cliente.cidade, "info-cidade"));
    clienteTr.appendChild(montaTd(cliente.estado, "info-estado"));
    clienteTr.appendChild(montaTd(cliente.email, "info-email"));    
    return clienteTr;
}

function montaTd(dado, classe) {   
    
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;
    
        return td;
    }

function adicionaclienteNaTabela(cliente) {

    var clienteTr = montaTr(cliente);
    
    var tabela = document.querySelector("#tabela-clientes");
    
    tabela.appendChild(clienteTr);
    
}