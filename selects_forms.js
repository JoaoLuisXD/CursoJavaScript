let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for(let i = 1; i < 32; i++)
{
    dia.innerHTML += `<option>${i}</option>`;
}
for(let j = 0; j < 12; j++)
{
    mes.innerHTML += `<option>${meses[j]}</option>`;
}
for(let k = 2025; k > 1974; k--)
{
    ano.innerHTML += `<option>${k}</option>`;
}