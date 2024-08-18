function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden')
}

function showelementById(id){
    const element = document.getElementById(id)
    element.classList.remove('hidden')
}