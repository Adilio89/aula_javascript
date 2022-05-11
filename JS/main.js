//1º Aula
//var nome = " Adilio ";                              /*string*/
//var idade = 32 ;                                    /* int*/ 
//var idade2 = 10 ;                                   /* int */
//var frase = "EU SOU O MELHOR DO MEU MUNDO";         /*STRING*/
//var n1 = 10;
//var n2 = 2;

/*alert(nome + " tem " + idade + " anos")*/
/*alert(idade + idade2)*/
/*console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("EU SOU", "NÃO SEI QUEM É"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);

*/



/* 2º Aula - ARRAY e DICIONARIO*/
//array

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");

console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.toString())
console.log(lista.join(" | "))

alert(lista[2]);


//dicionario
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome)
*/


//CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

/*var idade = prompt("Qual a Sua idade");
if (idade > 18) {
    alert("Maior de idade")
} else {
    alert("Menor de Idade")
};
*/

//laço de repetição
/*var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1
    //alert(count)
    //count++ //a mesma função da linha acima
};



var count;
for (count = 0; count <= 5; count++){
    alert(count);
};



var d = new Date();
alert(d);           // dia de hoje
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());




function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("VAI PRA CASA DO", "AI DENTO", "ASILADO"));





function validaIdade(idade){
    var validar
    if(idade >= 18) {
        validar = true;

    } else {
        validar = false;      
    }
    return validar;
}

var idade = prompt("Qual sua idade")
console.log(validaIdade(idade));

*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado Por Clicar</b>"
    //document.getElementById("agradecimento").innerHTML = "Obrigado Por Clicar"
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado Por Clicar")
}

function redirecionar() {
    window.open("https://www.google.com/");
    //window.location.href = " https://www.google.com/"
}

/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado Por Passa O Mouse";
    //alert("Trocar Texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe O Mouse Aqui";
}
*/

function trocar(elemento){
    elemento.innerHTML = "Obrigado Por Passar O Mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado Por Passa O Mouse";
    //alert("Trocar Texto");
}

function voltar(elemento) {
    elemento.innerHTML = " Passe o Mouse Aqui"
    //document.getElementById("mousemove").innerHTML = "Passe O Mouse Aqui";
}

function load(){
    alert("Pagina Carregada.. TUDO OK !!!")
}


function funcaoChange(elemento) {
    console.log(elemento.value)
}