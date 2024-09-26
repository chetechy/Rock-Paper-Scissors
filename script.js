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

    scores = 'Player score: ' + humanScore + '  ' + 'Computer score: ' + computerScore;
    console.log(scores);

}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    console.log('ROUND 1')
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log('ROUND 2')
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    console.log('ROUND 3')
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    console.log('ROUND 4')
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    console.log('ROUND 5')
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    if (humanScore > computerScore){
        console.log('\nCongratulations, You Win! \n\nFinal Scores ' + '\n'+scores);
    }else if(computerScore > humanScore){
        console.log('\nSorry, You Lose! Better luck next time.\n\nFinal Scores ' + '\n'+scores);
    }else{
        console.log('\nThis game is Draw! \n\nFinal Scores ' + '\n'+scores);
    }
}

playGame();