console.log("JavaScript carregado");

let list = document.querySelectorAll('.item');
console.log("Itens:", list);

let next = document.getElementById('next');
console.log("Botão next:", next);

let prev = document.getElementById('prev');
console.log("Botão prev:", prev);

let active = 0;

console.log("Active:", active);

next.addEventListener('click', function () {
    console.log("CLICOU NO NEXT");

    let activeOld = document.querySelector('.active');
    console.log("Item atual:", activeOld);

    activeOld.classList.remove('active');

    active++;

    if (active >= list.length) {
        active = 0;
    }

    console.log("Novo active:", active);

    list[active].classList.add('active');
});

prev.addEventListener('click', function () {
    console.log("CLICOU NO PREV");

    let activeOld = document.querySelector('.active');

    activeOld.classList.remove('active');

    active--;

    if (active < 0) {
        active = list.length - 1;
    }

    list[active].classList.add('active');
});