CEP.onkeyup = () => {
    if(CEP.value.length  == 8)
    {
        fetch(`https://viacep.com.br/ws/${CEP.value}/json/`)
        .then(resposta => resposta.json())
        .then(resposta2 => {
            rua.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.uf;
        })
    }
}