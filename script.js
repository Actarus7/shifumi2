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
    let randomIaChoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIaChoice
<<<<<<< HEAD
}    
//console.log(resultRandomIaChoice());


function playerScore (playerChoice) {
    if (shi.addEventListener('click', () => console.log('shi')) == 'shi') {
        player.src = "/img/shi.png"; 
        playerChoice = 'shi';
    }
    else if (fu.addEventListener('click', () => console.log('fu')) == 'fu') {
        player.src="/img/fu.png";
        playerChoice = 'fu';
    }
    else if (mi.addEventListener('click', () => console.log('mi'))){
        player.src="/img/mi.png";
        playerChoice = 'mi';}
    else {
        return playerChoice
    }
}
//console.log(playerScore())




=======
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
<<<<<<< HEAD
console.log(compare("mi"))
=======
console.log(compare())
>>>>>>> 61de414a8da007203e91871b2bf7d747d5cfc858
>>>>>>> 66f5b9f3d416b0d9be3c3bfa601dfb9caecb5f18

