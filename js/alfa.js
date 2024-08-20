



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
        // const currentScoreElement = document.getElementById('current-score');
        // const currentText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentText);
        // console.log(currentScore);

        const currentScore = getElementValueById('current-score')
        // imcrease score
        const newScore = currentScore + 1;

        setelementValueById('current-score', newScore)

        removeBackgroundColor(expectedAlphabet)
        continueGame()
    }
    else{

        const currentLife = getElementValueById('current-life');

        const newLife = currentLife - 1 ;

        setelementValueById('current-life', newLife);

        if(newLife == 0){
           gameOver()
        }




        // ......................................................................
        // const currentLifeId =  document.getElementById('current-life');
        // const currentLifeText = currentLifeId.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife -1 ;

        // currentLifeId.innerText = newLife;
    }
}

function play(){
    // hide everything show play ground

    hideElementById('home');
    hideElementById('final-score')
    showelementById('play-ground');
    // reset score and life 
    setelementValueById('current-life', 5)
    setelementValueById('current-score', 0)

    continueGame()
}


function gameOver(){
    hideElementById('play-ground')
    showelementById('final-score')
}
