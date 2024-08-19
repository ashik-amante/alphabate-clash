// function play(){
//     // add hiden to home screen
//    const home = document.getElementById('home');
//    home.classList.add('hidden')

//     //  remove hidden to play ground
//    const playGround = document.getElementById('play-ground');
//    playGround.classList.remove('hidden')
// }

function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden')
}

function showelementById(id){
    const element = document.getElementById(id)
    element.classList.remove('hidden')
}

function setBackgroundColor(id){
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColor(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}


function getaRandomAlphabet(){
    
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabetsString.split('');
    // get a ranfdom index between 1 to 25

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
    return alphabet
}



