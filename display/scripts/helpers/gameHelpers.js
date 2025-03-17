function displayLeaderboard(scores) {
    const leaderboardEl = document.querySelector(".leaderboard")
    leaderboardEl.innerHTML = ""
    let scoreEls = []
    for (score of scores) {
        const scoreEl = document.createElement("div")
        scoreEl.innerHTML = `
        <div class="score-entry"><p class="score-part">${score.rank} </p><p class="score-part">${score.name} </p> <p class="score-part">${score.score}</p> </div>`
        scoreEl.classList.add("display-score")
        scoreEls.push(scoreEl)
    }

    for (el of scoreEls) {
        leaderboardEl.appendChild(el)
    }
}