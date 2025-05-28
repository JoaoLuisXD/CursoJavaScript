CEP.onkeyup = () => { //quando terminar de digitar o CEP, usa onkeyup, pois é quando o usuario acaba de digitar uma tecla.
    if(CEP.value.length  == 8) //se o valor do tamanho do CEP for igual a 8 (tamanho de um CEP).
    {
        fetch(`https://viacep.com.br/ws/${CEP.value}/json/`) //funao fetch, que promete buscar no link do site, o valor do CEP, e o que da pra fazer a partir dele.
        .then(resposta => resposta.json()) //retorno da promessa com outra promessa, armazenando os dados em reposta, transformando em formato .json.
        .then(resposta2 => { //preenche os valores seguintes a partir do CEP anteriormente digitado.
            rua.value = resposta2.logradouro; 
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.uf;
            // cada variavel vai receber o valor encontrado no site.
        })
    }
}