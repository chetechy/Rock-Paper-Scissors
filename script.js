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
