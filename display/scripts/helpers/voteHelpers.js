const voteLength = 10000;
function promptVote() {
    let seconds = voteLength / 1000 - 1;
    mainEl.innerHTML = extras.filter(
        (extra) => extra.name === "vote"
    )[0].content;
    const countdown = setInterval(() => {
        // votePrompt.innerText = `VOTE!! ${seconds}`;
        seconds -= 1;
        if (seconds < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}