
var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('MouseRollover', entrar)
a.addEventListener('mouseout', sair)
a.addEventListener('dblclick')

function clicar() {
    var a = window.document.getElementById('area')
    a.innerText = 'Clicou'
    event.target.style.backgroundColor = 'salmon';
}

function MouseRollover() {

    a.innerText = Entrou
    a.style.backgroundColor = 'red'

}

document.getElementById("demo").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "I was double-clicked!";
}