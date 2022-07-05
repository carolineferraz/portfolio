const pOne = document.querySelector('#p1');
const pTwo = document.querySelector('#p2');
const pThree = document.querySelector('#p3');
const pFour = document.querySelector('#p4');
const bgOne = document.querySelector('#bg-p1');
const bgTwo = document.querySelector('#bg-p2');
const bgThree = document.querySelector('#bg-p3');
const bgFour = document.querySelector('#bg-p4');


function mostrarProjetoOverlayUm() {
    pOne.style.visibility = 'visible';
    bgOne.style.border = 'none';
}
function esconderProjetoOverlayUm() {
    pOne.style.visibility = 'hidden';
    bgOne.style.border = '3px solid var(--accent3-color)';
}


function mostrarProjetoOverlayDois() {
    pTwo.style.visibility = 'visible';
    bgTwo.style.border = 'none';
}
function esconderProjetoOverlayDois() {
    pTwo.style.visibility = 'hidden';
    bgTwo.style.border = '3px solid var(--accent3-color)';
}


function mostrarProjetoOverlayTres() {
    pThree.style.visibility = 'visible';
    bgThree.style.border = 'none';
}
function esconderProjetoOverlayTres() {
    pThree.style.visibility = 'hidden';
    bgThree.style.border = '3px solid var(--accent3-color)';
}


function mostrarProjetoOverlayQuatro() {
    pFour.style.visibility = 'visible';
    bgFour.style.border = 'none';
}
function esconderProjetoOverlayQuatro() {
    pFour.style.visibility = 'hidden';
    bgFour.style.border = '3px solid var(--accent3-color)';
}

