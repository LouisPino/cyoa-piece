//need to get vote and b images or folder names, need vote banner text

const flashTime = 250

function displayVote(mainEl, extras, voteLength, currentLocation) {
    let seconds = voteLength / 1000 - 1;
    mainEl.innerHTML = extras.filter(
        (extra) => extra.name === "vote"
    )[0].content;
    const voteTimeDiv = document.querySelector(".vote-time-div")
    const voteBannerText = document.querySelector(".vote-banner-text")
    const voteAImg = document.getElementById("vote-a-img")
    const voteBImg = document.getElementById("vote-b-img")
    const voteBGs = document.querySelectorAll(".vote-selection-bg")
    voteBannerText.innerHTML = currentLocation.choicePrompt
    voteAImg.src = `display/assets/vote/location/${currentLocation.choices[0]}/up.PNG`
    voteBImg.src = `display/assets/vote/location/${currentLocation.choices[1]}/up.PNG`
    voteTimeDiv.style.animation = `voteTimer ${voteLength / 1000}s linear`;
    let voteEls = [voteAImg, voteBImg, voteBGs[0], voteBGs[1]]
    setTimeout(() => { flashVotes(voteEls) }, flashTime * 2)
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
    setTimeout(() => { document.getElementById("vote-prompt").style.top = "0px" }, 10)
}

function flashOnce(voteEls) {
    voteEls.forEach((el) => {
        setTimeout(() => {
            el.src = el.src.replace("up", "down");
        }, flashTime / 2);

        setTimeout(() => {
            el.src = el.src.replace("down", "up"); // Change back if needed
        }, flashTime);
    });

}

function flashVotes(voteEls) {
    setTimeout(() => flashOnce(voteEls), flashTime)
    setTimeout(() => flashOnce(voteEls), flashTime * 2)
    setTimeout(() => flashOnce(voteEls), flashTime * 3)
}