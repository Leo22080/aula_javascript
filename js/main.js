function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));    
}

function direcionar(){
    //window.open("https://globallabs.ventures/");
    window.location.href = "https://globallabs.ventures/";
}

function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar testo");
    element.innerHTML = "Obrigado por passar o mouse";
}

function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(element){
    console.log(element.value);
}


/*
function soma(a, b){
    return a+b;
}
function validar(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}
var idade = prompt("Qual a sua idade");
console.log(validar(idade));

alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getMilliseconds());
*/

/*
for(var count=5;count>=0;count--){
    alert(count);
}
count = 0;
while(count<=10){
    console.log(count);
    count++;
}
*/
/*
var idade = prompt("Qual a sua idade");
if(idade>=18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}*/

/*
var frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta)
//alert(fruta.nome);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(' - '));

/*
var nome = "Leonardo Costa";
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor pais do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil").toUpperCase());
alert(frase.replace("Japão","Brasil").toLowerCase());
*/