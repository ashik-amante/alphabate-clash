

function play(){
    hideElementById('home');
    showelementById('play-ground');
    continueGame()
}

function continueGame(){
    // generate a random alphabet
    const alphabet = getaRandomAlphabet();

    // set randomly generated alphabet

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet

    // set backgroung color

    setBackgroundColor(alphabet)
    
}

// key board 

document.addEventListener('keyup', handleKeyBoardButtobPress)

function handleKeyBoardButtobPress(event){
    const playerPressed = event.key;
    // console.log('player pressed ',playerPressed);

    // get the expected to press

    const currentAlphabet = document.getElementById('current-alphabet')
    const targetAlphabet = currentAlphabet.innerText;
    const expectedAlphabet= targetAlphabet.toLowerCase()
    console.log(playerPressed , expectedAlphabet);

    // checking

    if(playerPressed === expectedAlphabet){
        console.log('win');
        // updadte score

        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentText = currentScoreElement.innerText;
        const currentScore = parseInt(currentText);
        console.log(currentScore);

        // imcrease score
        const newScore = currentScore+ 1;

        currentScoreElement.innerText =newScore;




        removeBackgroundColor(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('lose');
    }
}

