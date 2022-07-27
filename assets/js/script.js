// ON LOAD ANIMATIONS:

/*

const divHome = document.querySelector('.div-home');

function showDivHome() {
    divHome.style.transitionDuration = '3s';
    divHome.style.visibility = 'visible';  
}

*/

// PROJECTS:

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


// SKILLS:

const textSkillNone = document.querySelector('.text-skill-none');
const divTextSkillHtml = document.querySelector('.div-text-skill-html');
const divTextSkillCss = document.querySelector('.div-text-skill-css');
const divTextSkillJs = document.querySelector('.div-text-skill-js');
const divTextSkillTs = document.querySelector('.div-text-skill-ts');
const divTextSkillAngular = document.querySelector('.div-text-skill-angular');
const divTextSkillJava = document.querySelector('.div-text-skill-java');
const divTextSkillSpring = document.querySelector('.div-text-skill-spring');
const divTextSkillMysql = document.querySelector('.div-text-skill-mysql');
const divTextSkillGit = document.querySelector('.div-text-skill-git');
const divTextSkillScrum = document.querySelector('.div-text-skill-scrum');


function mostrarDivHtml() {
    divTextSkillHtml.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivHtml() {
    divTextSkillHtml.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivCss() {
    divTextSkillCss.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivCss() {
    divTextSkillCss.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivJs() {
    divTextSkillJs.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivJs() {
    divTextSkillJs.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivTs() {
    divTextSkillTs.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivTs() {
    divTextSkillTs.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivAngular() {
    divTextSkillAngular.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivAngular() {
    divTextSkillAngular.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivJava() {
    divTextSkillJava.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivJava() {
    divTextSkillJava.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivSpring() {
    divTextSkillSpring.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivSpring() {
    divTextSkillSpring.style.display = 'none';
    textSkillNone.style.display = 'flex';
}

function mostrarDivMysql() {
    divTextSkillMysql.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivMysql() {
    divTextSkillMysql.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivGit() {
    divTextSkillGit.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivGit() {
    divTextSkillGit.style.display = 'none';
    textSkillNone.style.display = 'flex';
}


function mostrarDivScrum() {
    divTextSkillScrum.style.display = 'block';
    textSkillNone.style.display = 'none';
}
function esconderDivScrum() {
    divTextSkillScrum.style.display = 'none';
    textSkillNone.style.display = 'flex';
}
