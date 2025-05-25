/*function boas_vindas(nome)
{
    document.writeln(`<h1>Ola ${nome}</h1>`);
}
boas_vindas("joao");
boas_vindas("isabela");*/

/*function soma(n1,n2)
{
    console.log(n1 + n2);
    return n1 + n2;
    //document.writeln(`o resultado e ${n1+n2}`);
}
soma(1,1);
document.writeln(`<h1>a soma e ${soma(2,2)}</h1>`);
document.writeln(`<h1>a soma e ${soma(3,7)}</h1>`);
let resultado = soma(9,11);
document.writeln(resultado);
console.log(resultado);*/

/*for(let i = 1; i < 32; i++)
{
    dia.innerHTML += `<option>${i}</option>`;
}
for(let i = 1; i < 13; i++)
{
    mes.innerHTML += `<option>${i}</option>`;
}*/

function preencher_selects(tipo,fim)
{
    for(let i = 1; i < fim; i++)
    {
        tipo.innerHTML += `<option>${i}</option>`;
    }
}
let dia = document.getElementById("dia");
let mes = document.getElementById("mes");

preencher_selects(dia,32);
preencher_selects(mes,13);

