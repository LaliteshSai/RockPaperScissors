const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')

const PossibleChoices = document.querySelectorAll('button')

let UserChoice
let computerChoice
let result


function generateComputerChoice(){
    // const randomNumber= Math.floor(Math.random() * PossibleChoices.length)+1

    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // output: a random integer between 1 and 3 (inclusive)
    
    
    
    if(randomNumber === 1)
    {
        computerChoice='rock'
    }
    if(randomNumber === 2)
    {
        computerChoice='scissors'
    }
    if(randomNumber === 1)
    {
        computerChoice='paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice
    
    
}
function getResult(){
    if(computerChoice === UserChoice)
    {
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && UserChoice==='paper' )
    {
        result = 'You Win'
    }
    if(computerChoice === 'rock' && UserChoice==='scisors' )
    {
        result = 'You Lose'
    }
    if(computerChoice === 'paper' && UserChoice==='rock' )
    {
        result = 'You Lose'
    }
    if(computerChoice === 'paper' && UserChoice==='scissors' )
    {
        result = 'You Win'
    }
    if(computerChoice === 'scissors' && UserChoice==='paper' )
    {
        result = 'You Lose'
    }
    if(computerChoice === 'scissors' && UserChoice==='rock' )
    {
        result = 'You Win'
    }
    resultDisplay.innerHTML=result
}


PossibleChoices.forEach(PossibleChoice => PossibleChoice.addEventListener('click', (e)=>{
    UserChoice=e.target.id
    userChoiceDisplay.innerHTML=UserChoice
    generateComputerChoice()
    getResult()
}
))