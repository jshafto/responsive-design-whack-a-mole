// Write your JS here.
let score = 0;
let moles = 30;
let waitTime = 3000;
let win = false;

function popUpRandomMole() {
    // moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)')
    // if moleHeads list is empty, you've won -- return
    if (win) return;
    const moleHeads = document.querySelectorAll(".wgs__mole-head")
    //console.log(moleHeads);
    let randNum = Math.floor(Math.random()* 8)
    let mole = moleHeads[randNum]
    //console.log(randNum)
    mole.classList.remove("wgs__mole-head--hidden")
    //let waitTime = Math.floor(Math.random() * 2000) + 1000
    setTimeout(hideMole, waitTime, mole)

}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden")
    let delay = Math.floor(Math.random() * 500) + 500;
    setTimeout(popUpRandomMole, delay)
}

function updateScore() {
    let scoreDiv = document.querySelector(".navbar__score")
    scoreDiv.innerHTML = `Score: ${score}`
    let molesDiv = document.querySelector(".navbar__moles")
    molesDiv.innerHTML = `Moles: ${moles}`

    if (win) {
        let gameStatusDiv = document.querySelector(".navbar__game-status")
        gameStatusDiv.innerHTML = "YOU WIN!"
    }
}

window.addEventListener("DOMContentLoaded", event => {
    updateScore();
    setTimeout(popUpRandomMole, 1000);


    const pf = document.querySelector('.pf');
    pf.addEventListener('click', event => {
        if (win) return;
        // if the event.target doesn't have the class wgs__mole-head, return
        if (!event.target.classList.contains('wgs__mole-head')) return;
        // otherwise, add the hidden class to make the mole disappear
        event.target.classList.add("wgs__mole-head--hidden");
        score++;
        moles--;
        waitTime -= 85;
        if (moles === 0) {
            win = true;
        }
        updateScore();

        // add a wgs__mole-head--whacked class to the mole
    })


})
