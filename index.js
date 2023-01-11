let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0

function plusOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function plusTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function plusThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function plusOneG(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function plusTwoG(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plusThreeG(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function playAgain(){
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0

}

// kaip paryskinti aukstesni score?? (neveikia)
// function highestScore() {
//     if (homeScore > guestScore) {
//         homeScore.style.color = "green"
//         guestScore.style.color = "#F94F6D"
//     } else if (guestScore > homeScore) {
//         guestScore.style.color = "green"
//         homeScore.style.color = "#F94F6D"
//     } else {
//         homeScore.style.color = "#F94F6D"
//         guestScore.style.color = "#F94F6D"
//     }
// }


