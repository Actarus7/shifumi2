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
let scoreIA = 0
let scorePlayer = 0


function resultRandomIaChoice() {
    let randomIaChoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIaChoice
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



function compare(choice){
    let IAChoice = resultRandomIaChoice();
    if (choice===IAChoice) {
        console.log(choice + "/" + IAChoice);
        console.log("EGALITE");
        console.log(scorePlayer + " - " + scoreIA)
    }
    else if (choice==="shi" && IAChoice==="fu" || 
            choice==="fu" && IAChoice==="mi" || 
            choice==="mi" && IAChoice==="shi"){
        console.log(choice + "/" + IAChoice);
        console.log("YOU WIN");
        ++scorePlayer;
        console.log(scorePlayer + " - " + scoreIA)
    }
    else {
        console.log(choice + "/" + IAChoice);
        console.log("YOU LOOSE");
        ++scoreIA;
        console.log(scorePlayer + " - " + scoreIA)
    }
}

//console.log(resultRandomIaChoice());
console.log(compare("shi"))

