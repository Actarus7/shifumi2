const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
const buttonRestart = document.getElementById('restart');

shi.addEventListener('click', () => shiPlayer());
fu.addEventListener('click', () => fuPlayer());
mi.addEventListener('click', () => miPlayer());
buttonRestart.addEventListener('click', () => restartGame());

// Pour le reste, a vous de jouer 

function shiPlayer () {
    player.src = "/img/shi.png";  
    compare("shi");
    endGame();
}
function fuPlayer () {
    player.src = "/img/fu.png";  
    compare("fu");
    endGame();
}
function miPlayer () {
    player.src = "/img/mi.png";  
    compare("mi");
    endGame();
}

let arrayIaChoice = ["shi","fu","mi"];
let scoreIA = 0
let scorePlayer = 0
let game = 0


function resultRandomIaChoice() {
    let randomIaChoice = arrayIaChoice[Math.floor(Math.random()*arrayIaChoice.length)] 
    return randomIaChoice
}    


function playerScore (playerChoice) {
    if (shi.addEventListener('click', () => '')) {
        playerChoice = 'shi';
    }
    else if (fu.addEventListener('click', () =>'')) {
        playerChoice = 'fu';
    }
    else if (mi.addEventListener('click', () => '')){
        playerChoice = 'mi';}
    else {
        return playerChoice
    }
}

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

function endGame() {
    console.log(game)
    if (game === 3 || scoreIA === 2 || scorePlayer === 2) {
        console.log('PARTIE TERMINEE');
        command.hidden = true;
        buttonRestart.setAttribute("class","btn-restart")
    }
    else {
        console.log('LA PARTIE CONTINUE')   
    }
}

function restartGame() {
    game = 0;
    scoreIA = 0;
    scorePlayer = 0;
    document.getElementById('score-ia').innerHTML = 0;
    document.getElementById('score-player').innerHTML = 0;
    buttonRestart.setAttribute("class", "hidden btn-restart");
    command.hidden = false;
}