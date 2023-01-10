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
