//let itexto = document.getElementById('produto');

//console.log(itexto);

//let spans = document.getElementsByTagName('span');

//console.log(spans);

//let eles = document.getElementsByClassName('texto');

//console.log(eles)

// Ler valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// Alterar valores
//spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'Geek University';

// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// let inp = document.querySelectorAll('input'); // busca todos elementos pela tag

//let eles = document.querySelectorAll('.texto'); //busca todos elementos pela classe

//let div1 = document.querySelector('#div1'); // Busca elemento pelo ID

//let imp = document.querySelector('input[name=preco]');

//console.log(imp);

// Exemplo 1

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}

