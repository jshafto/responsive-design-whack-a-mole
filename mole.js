// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//       const moleHeads = document.querySelectorAll('.wgs__mole-head');
//       for (let moleHead of moleHeads) {
//         moleHead.classList.toggle('wgs__mole-head--hidden');
//       }
//     }, 1000);

//   });

function popUpRandomMole() {

    const moleHeads = document.querySelectorAll(".wgs__mole-head")
    console.log(moleHeads);
    let randNum = Math.floor(Math.random()* 8)
    let mole = moleHeads[randNum]
    console.log(randNum)
    mole.classList.remove("wgs__mole-head--hidden")
    //let waitTime = Math.floor(Math.random() * 2000) + 1000
    setTimeout(hideMole, 3000, mole)

}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden")
    setTimeout(popUpRandomMole, 1000)
}

window.addEventListener("DOMContentLoaded", event => {
    setTimeout(popUpRandomMole, 1000)

})
