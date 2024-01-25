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