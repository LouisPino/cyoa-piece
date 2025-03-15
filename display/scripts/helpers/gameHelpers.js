function displayLeaderboard(scores) {
    console.log(scores)
    const leaderboardEl = document.querySelector(".leaderboard")
    leaderboardEl.innerHTML = ""
    let scoreEls = []
    for (score of scores) {
        const scoreEl = document.createElement("div")
        scoreEl.innerHTML = `${score.name} - ${score.score}`
        scoreEl.classList.add("display-score")
        scoreEls.push(scoreEl)
    }

    for (el of scoreEls) {
        leaderboardEl.appendChild(el)
    }
}