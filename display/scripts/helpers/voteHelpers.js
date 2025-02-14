function displayVote(mainEl, extras, voteLength) {
    let seconds = voteLength / 1000 - 1;
    mainEl.innerHTML = extras.filter(
        (extra) => extra.name === "vote"
    )[0].content;
    const voteTimeDiv = document.querySelector(".vote-time-div")
    voteTimeDiv.style.animation = `voteTimer ${voteLength / 1000}s linear`;
    const countdown = setInterval(() => {
        seconds -= 1;
        if (seconds < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function promptVote(mainEl, extras) {
    const html = extras.filter(
        (extra) => extra.name === "votePrompt"
    )[0].content;
    mainEl.innerHTML += html
}