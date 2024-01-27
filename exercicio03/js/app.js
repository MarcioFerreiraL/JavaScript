function evento1() {
    let primeiroBotao = document.getElementById("primeiroBotao")
    primeiroBotao.style.background = 'yellow';
    let lista = ['Um', 'Dois', 'Três'];
    alert("a lista é: " + lista)
    console.log(lista.length);
    console.log(Array.isArray(lista));
}
function evento2() {
    document.body.style.background = 'green';
}
function evento3() {
    let button = document.getElementById("Teste")
    button.style.background = 'red';
}
function evento4() {
    document.body.style.background = 'blue';
}
function evento5() {
    document.body.style.background = '#ccc';
}
function add() {
    let texto = document.getElementById("Teste");
    texto.append('a <br>');
}
function normal() {
    let button = document.getElementById("Teste")
    button.style.background = '#ccc';
}

var hora = new Date().getHours();
var minuto = new Date().getMinutes();
var segundos = new Date().getSeconds();
if (minuto < 10) {
    minuto = "0" + minuto;
}
if (hora < 10) {
    hora = "0" + hora;
}
if (segundos < 10) {
    segundos = "0" + segundos;
}
document.getElementById("Hora").innerHTML = (hora + ":" + minuto + ":" + segundos);
if (18 > hora > 12) {
    document.getElementById("Text").innerHTML = 'Bom tarde!';
} else if (hora > 18 || hora < 6) {
    document.getElementById("Text").innerHTML = 'Boa noite!';
} else {
    document.getElementById("Text").innerHTML = 'Bom dia!';
}
