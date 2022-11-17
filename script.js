const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => console.log('shi'));
fu.addEventListener('click', () => console.log('fu'));
mi.addEventListener('click', () => console.log('mi'));

// Pour le reste, a vous de jouer


let arrayIaChoice = ["shi","fu","mi"];

function resultRandomIaChoice() {
    let randomIachoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIachoice
}




    


//console.log(resultRandomIaChoice());