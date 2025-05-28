let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
// define meses com os nomes dos meses do ano.
for(let i = 1; i < 32; i++)
{
    dia.innerHTML += `<option>${i}</option>`; //Adicione essa nova <option> dentro do conteúdo HTML do <select> chamado dia.
}
for(let j = 0; j < 12; j++)
{
    mes.innerHTML += `<option>${meses[j]}</option>`; //Adicione essa nova <option> dentro do conteúdo HTML do <select> chamado mes.
}
for(let k = 2025; k > 1974; k--)
{
    ano.innerHTML += `<option>${k}</option>`; //Adicione essa nova <option> dentro do conteúdo HTML do <select> chamado ano.
}