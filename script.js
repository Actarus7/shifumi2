const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => shiPlayer());
fu.addEventListener('click', () => fuPlayer());
mi.addEventListener('click', () => miPlayer());

// Pour le reste, a vous de jouer 

function shiPlayer () {
    player.src = "/img/shi.png";  
    compare("shi");
    restartGame();
}
function fuPlayer () {
    player.src = "/img/fu.png";  
    compare("fu");
    restartGame();
}
function miPlayer () {
    player.src = "/img/mi.png";  
    compare("mi");
    restartGame();
}

let arrayIaChoice = ["shi","fu","mi"];
let scoreIA = 0
let scorePlayer = 0
let game = 0


function resultRandomIaChoice() {
    let randomIaChoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIaChoice
}    
//console.log(resultRandomIaChoice());


function playerScore (playerChoice) {
    if (shi.addEventListener('click', () => console.log('shi')) == 'shi') {
        player.setAttribute(src = "/img/shi.png"); 
        
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
//console.log(playerScore())


function compare(choice){
    let IAChoice = resultRandomIaChoice();
    ia.setAttribute("src",`/img/${IAChoice}.png`)
    if (choice===IAChoice) {
        console.log(choice + "/" + IAChoice);
        console.log("EGALITE");
        console.log(scorePlayer + " - " + scoreIA)
    }
    else if (choice==="shi" && IAChoice==="fu" || 
    choice==="fu" && IAChoice==="mi"  || 
    choice==="mi" && IAChoice==="shi"){
        console.log(choice + "/" + IAChoice);
        console.log("YOU WIN");
        ++game
        document.getElementById('score-player').innerHTML = ++scorePlayer;
        console.log(scorePlayer + " - " + scoreIA)
    }
    else {
        console.log(choice + "/" + IAChoice);
        console.log("YOU LOOSE");
        ++game
        document.getElementById('score-ia').innerHTML = ++scoreIA;
        console.log(scorePlayer + " - " + scoreIA)
    }
}


//console.log(resultRandomIaChoice());
//console.log(compare("shi"))

function restartGame() {
    console.log(game)
    if (game === 3 || scoreIA === 2 || scorePlayer === 2) {
        console.log('PARTIE TERMINEE');
    }
    else {
        console.log('LA PARTIE CONTINUE')   
    }
}