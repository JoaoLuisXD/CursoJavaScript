let n1 = Number(prompt("digite o primeiro numero")); //variavel n1, fazendo o "casting", dizendo que é um numero.
let n2 = Number(prompt("digite o segundo numero")); // mesma coisa, porem com n2
if(n1 > n2) 
{
    console.log(`${n1} e maior que ${n2}`); //se n1 for maior que n2
}
else if(n1 < n2)console.log(`${n2} e maior que ${n1}`); //se n2 for maior que n1
else if(n1 == n2)console.log(`${n1} e ${n2} sao iguais`); //se forem de mesmo valor(iguais)

// ------------------------------------------------------------------------------------------//

let mode = "dark"; // cria uma variavel "mode", e define-a com "dark"
console.log(mode == "dark" ? "eh" : "naoeh"); // compara o "mode" com "dark" para ver se são iguais

// ------------------------------------------------------------------------------------------//

switch(mode) //verificar "mode"
{
    case "dark": document.querySelector("body").style.backgroundColor = "#222222"; //se for dark, transforma o background, pintando-o na cor preto.
    break;
    case "red": document.querySelector("body").style.backgroundColor = "#FF0022"; //se for red, transforma o background, pintando-o na cor vermelho.
    break;
    case "blue": document.querySelector("body").style.backgroundColor = "#2200FF" // se for blue, transforma o background, pintando-o na cor azul.
    break;
    default: document.querySelector("body").style.backgroundColor = "#FF00FF"; // se não for nenhum das anteriores, transforma o background, pintado-o na cor rosa.

}