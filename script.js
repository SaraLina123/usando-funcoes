let imgBranco1 = document.querySelector('.imagem1');
let imgBranco2 = document.querySelector('.imagem2');
let imgBranco3 = document.querySelector('.imagem3');
let imgBranco4 = document.querySelector('.imagem4');

function rev1() {
    imgBranco1.setAttribute('src', './img/esquilo.jpg');
}
rev1(onclick());

function rev2() {
    imgBranco2.setAttribute('src', './img/vaca.jpg');
}
rev2(onclick());

function rev3() {
    imgBranco3.setAttribute('src', './img/girafa.jpg');
}
rev3(onclick());

function rev4() {
    imgBranco4.setAttribute('src', './img/coelho.jpg');
}
rev4(onclick());



function verificar1() {
    var resposta1 = document.querySelector('.resposta1');
    var inputNome1 = document.querySelector('.input1');
    var nome1 = inputNome1.value

    if(nome1 == 'esquilo'){
        resposta1.innerHTML = 'Nome correto\u{2705}'
    } else {
        resposta1.innerHTML = 'Nome Incorreto\u{274c}'
    }
    if(nome1 == '') {
        resposta1.innerHTML = 'Digite o nome\u{274c}'
    }
}
function verificar2() {
    var resposta2 = document.querySelector('.resposta2');
    var inputNome2 = document.querySelector('.input2');
    var nome2 = inputNome2.value

    if(nome2 == 'vaca'){
        resposta2.innerHTML = 'Nome correto\u{2705}'
    } else {
        resposta2.innerHTML = 'Nome incorreto\u{274c}'
    }
    if(nome2 == '') {
        resposta2.innerHTML = 'Digite o nome\u{274c}'
    }
}
function verificar3() {
    var resposta3 = document.querySelector('.resposta3');
    var inputNome3 = document.querySelector('.input3');
    var nome3 = inputNome3.value

    if(nome3 == 'girafa'){
        resposta3.innerHTML = 'Nome correto\u{2705}'
    } else {
        resposta3.innerHTML = 'Nome incorreto\u{274c}'

    }
    if(nome3 == '') {
        resposta3.innerHTML = 'Digite o nome\u{274c}'
    }
}
function verificar4() {
    var resposta4 = document.querySelector('.resposta4');
    var inputNome4 = document.querySelector('.input4');
    var nome4 = inputNome4.value

    if(nome4 == 'coelho'){
        resposta4.innerHTML = 'Nome correto\u{2705}'
    } else {
        resposta4.innerHTML = 'Nome incorreto\u{274c}'
    }
    if(nome4 == '') {
        resposta4.innerHTML = 'Digite o nome\u{274c}'
    }
}


