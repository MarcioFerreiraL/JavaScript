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



setInterval(function () {
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let segundos = new Date().getSeconds();
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
}
, 1)


function verificarCor() {
    let color = (document.getElementById('cor').value).toLowerCase();
    let mexer = document.getElementById('cor');
    switch (color) {
        case 'azul':
            mexer.style.borderColor = 'Blue';
            mexer.style.color = 'Blue';
            break
        case 'vermelho':
            mexer.style.borderColor = 'Red';
            mexer.style.color = 'Red';
            break
        case 'verde':
            mexer.style.borderColor = 'Green';
            mexer.style.color = 'Green';
            break
        default:
            document.getElementById("Erro").innerHTML = 'Digite alguma coisa';
    
}
}
for (let a = 2024; a >= 1900; a--) {
    document.getElementById('anos').innerHTML += "<option value='" + a + "'>"+a+"</option>"
}