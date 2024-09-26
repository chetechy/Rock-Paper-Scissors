function getComputerChoice(){
    let pcChoice = Math.floor(Math.random()* 3) + 1;

    if(pcChoice === 1){
        return 'Rock';
    }else if(pcChoice === 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }  
}

function getHumanChoice(){
    let huChoice = prompt('Choose P for Paper, S for Scissors, or R for Rock').toLowerCase();
    console.log(huChoice);
    if(huChoice === 'p'){
        return 'Paper';
    }else if(huChoice === 'r'){
        return 'Rock';
    }else if(huChoice === 's'){
        return 'Scissors'
    } else{
        console.log('Invalid choice! Choose P for Paper, S for Scissors, or R for Rock ')
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(huChoice, pcChoice){

    if (huChoice === pcChoice){
        console.log('Draw!')
    } else if(
        (huChoice === 'Rock' && pcChoice === 'Scissors') || 
        (huChoice === 'Paper' && pcChoice === 'Rock')|| 
        (huChoice === 'Scissors' && pcChoice === 'Paper') 
    ){
        console.log(huChoice + ' beats ' + pcChoice + ', You won this round!' );
        humanScore++;
    }else{
        console.log('You lost this round! ' + pcChoice + ' beats ' + huChoice + '.');
        computerScore++;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);