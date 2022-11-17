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

function compare(choice){
    if (choice===resultRandomIaChoice()) {
        console.log("EGALITE");
    }
    else if (choice==="shi" && resultRandomIaChoice()==="fu" || 
            choice==="fu" && resultRandomIaChoice()==="mi" || 
            choice==="mi" && resultRandomIaChoice()==="shi"){
        console.log("YOU WIN");
        ++scorePlayer;
    }
    else {
        console.log("YOU LOOSE");
        ++scoreIA;
    }
}




    


//console.log(resultRandomIaChoice());
console.log(compare("mi"))

