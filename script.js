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




function playerScore (playerChoice) {
    if (shi.addEventListener('click', () => console.log('shi')) == 'shi') {
        playerChoice = 'shi';
    }
    else if (fu.addEventListener('click', () => console.log('fu')) == 'fu') {
        playerChoice = 'fu';
    }
    else if (mi.addEventListener('click', () => console.log('mi'))){
        playerChoice = 'mi';}
    else {
        return playerChoice
    }
}
console.log(playerScore())

let arrayIaChoice = ["shi","fu","mi"];

function resultRandomIaChoice() {
    let randomIaChoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIaChoice
}
let choice1 = "shi";
//let choice2 = "fu";
//let choice3 = "mi";

function compare(){
    if (choice1===resultRandomIaChoice()) {
        console.log("EGALITE")
    }
    else if (choice1==="shi" && resultRandomIaChoice()==="fu"){
        console.log("YOU WIN")
    }
}


    


//console.log(resultRandomIaChoice());
console.log(compare())

